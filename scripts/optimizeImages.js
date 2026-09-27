import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

async function getFiles(dir) {
    const subdirs = await fs.promises.readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        return (await fs.promises.stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

async function optimizeImages() {
    console.log('🔍 Scanning public/images directory...');
    const allFiles = await getFiles(IMAGES_DIR);
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
    const imageFiles = allFiles.filter(f => imageExtensions.includes(path.extname(f).toLowerCase()));

    console.log(`Found ${imageFiles.length} images to analyze.`);

    let totalOriginalBytes = 0;
    let totalOptimizedBytes = 0;
    let processedCount = 0;

    for (const filePath of imageFiles) {
        const stat = await fs.promises.stat(filePath);
        totalOriginalBytes += stat.size;

        // Skip files already under 200KB unless dimensions are huge
        const ext = path.extname(filePath).toLowerCase();

        try {
            const image = sharp(filePath);
            const metadata = await image.metadata();

            const isHuge = stat.size > 250 * 1024 || metadata.width > 1200 || metadata.height > 1200;
            if (!isHuge) {
                totalOptimizedBytes += stat.size;
                continue;
            }

            const tempPath = filePath + '.temp_opt' + ext;
            let pipeline = sharp(filePath).resize({
                width: 1200,
                height: 1200,
                fit: 'inside',
                withoutEnlargement: true
            });

            if (ext === '.png') {
                pipeline = pipeline.png({
                    quality: 85,
                    compressionLevel: 9,
                    effort: 8
                });
            } else if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({
                    quality: 85,
                    mozjpeg: true
                });
            } else if (ext === '.webp') {
                pipeline = pipeline.webp({
                    quality: 85,
                    effort: 6
                });
            }

            await pipeline.toFile(tempPath);
            const optStat = await fs.promises.stat(tempPath);

            // Only overwrite if optimized file is actually smaller
            if (optStat.size < stat.size) {
                await fs.promises.unlink(filePath);
                await fs.promises.rename(tempPath, filePath);
                totalOptimizedBytes += optStat.size;
                const savedKB = Math.round((stat.size - optStat.size) / 1024);
                const percent = Math.round(((stat.size - optStat.size) / stat.size) * 100);
                console.log(`✅ Optimized ${path.basename(filePath)}: ${(stat.size / (1024 * 1024)).toFixed(2)} MB ➔ ${(optStat.size / 1024).toFixed(1)} KB (Saved ${savedKB} KB, -${percent}%)`);
                processedCount++;
            } else {
                await fs.promises.unlink(tempPath);
                totalOptimizedBytes += stat.size;
            }
        } catch (err) {
            console.error(`⚠️ Error processing ${path.basename(filePath)}:`, err.message);
            totalOptimizedBytes += stat.size;
        }
    }

    const origMB = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
    const optMB = (totalOptimizedBytes / (1024 * 1024)).toFixed(2);
    const savedMB = ((totalOriginalBytes - totalOptimizedBytes) / (1024 * 1024)).toFixed(2);
    const totalPercent = Math.round(((totalOriginalBytes - totalOptimizedBytes) / totalOriginalBytes) * 100);

    console.log('\n=========================================');
    console.log(`🎉 Optimization Complete!`);
    console.log(`🖼️  Processed ${processedCount} images`);
    console.log(`📦 Original Size: ${origMB} MB`);
    console.log(`🚀 New Size:      ${optMB} MB`);
    console.log(`💰 Bandwidth Saved: ${savedMB} MB (-${totalPercent}%)`);
    console.log('=========================================\n');
}

optimizeImages();
