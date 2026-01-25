import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { squareSizes, rectSizes, roundSizes, heavySizes, gulleySizes, recessedSizes } from '../../data/dimensions';

// Final Premium Flortek Palette
const COLORS = {
    GREEN: '#109148',
    YELLOW: '#FFD700',
    DEEP_GREEN: '#065f46',
    LIGHT_GREEN: '#f0fdf4',
    SOFT_YELLOW: '#fffbeb',
    SLATE_900: '#0f172a',
    SLATE_700: '#334155',
    SLATE_500: '#64748b',
    SLATE_200: '#e2e8f0',
    SLATE_50: '#f8fafc',
    WHITE: '#ffffff'
};

const styles = StyleSheet.create({
    page: {
        padding: 45,
        fontFamily: 'Helvetica',
        fontSize: 9,
        color: COLORS.SLATE_900,
        backgroundColor: COLORS.WHITE,
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 12,
        flexDirection: 'row',
    },
    topBarPrimary: { flex: 3, backgroundColor: COLORS.GREEN },
    topBarSecondary: { flex: 1, backgroundColor: COLORS.YELLOW },

    // Header Design
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.YELLOW,
    },
    logoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 95,
        height: 45,
        marginRight: 15,
    },
    companyText: {
        flexDirection: 'column',
    },
    companyName: {
        fontSize: 32,
        fontWeight: 'extrabold',
        color: COLORS.GREEN,
        letterSpacing: 2,
    },
    tagline: {
        fontSize: 9,
        fontWeight: 'bold',
        color: COLORS.SLATE_500,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    certBadge: {
        textAlign: 'right',
    },
    isoText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: COLORS.WHITE,
        backgroundColor: COLORS.GREEN,
        padding: '4 12',
        borderRadius: 20,
        marginBottom: 8,
    },
    webLink: {
        fontSize: 8,
        color: COLORS.SLATE_500,
        fontWeight: 'bold',
    },

    // Banner Design
    banner: {
        backgroundColor: COLORS.SLATE_900,
        padding: '12 25',
        borderRadius: 12,
        marginBottom: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bannerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.WHITE,
        letterSpacing: 3,
        textTransform: 'uppercase',
    },
    bannerYear: {
        fontSize: 9,
        fontWeight: 'bold',
        color: COLORS.YELLOW,
    },

    // SECTION HEADERS
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionNumber: {
        backgroundColor: COLORS.YELLOW,
        color: COLORS.SLATE_900,
        width: 24,
        height: 24,
        borderRadius: 12,
        textAlign: 'center',
        lineHeight: 24,
        fontSize: 11,
        fontWeight: 'extrabold',
        marginRight: 12,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'extrabold',
        color: COLORS.GREEN,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    // TABLE UI ENHANCEMENT
    tableContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1.5,
        borderColor: COLORS.GREEN,
        marginBottom: 35,
    },
    // Table Tier 1 (Grouped Header)
    groupHeader: {
        flexDirection: 'row',
        backgroundColor: COLORS.GREEN,
    },
    groupCell: {
        flex: 1,
        padding: 8,
        textAlign: 'center',
        color: COLORS.WHITE,
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    tonneHeader: {
        backgroundColor: COLORS.YELLOW,
        color: COLORS.SLATE_900,
        padding: 4,
        textAlign: 'center',
        fontSize: 8,
        fontWeight: 'extrabold',
        letterSpacing: 1,
    },
    // Table Tier 2 (Sub Header)
    subHeader: {
        flexDirection: 'row',
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 1.5,
        borderBottomColor: COLORS.YELLOW,
    },
    subCell: {
        flex: 1,
        padding: 6,
        textAlign: 'center',
        color: COLORS.GREEN,
        fontSize: 7,
        fontWeight: 'extrabold',
    },
    // Data Row
    dataRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.SLATE_50,
        alignItems: 'center',
    },
    // Data Cells
    cellPrimary: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'extrabold',
        color: COLORS.SLATE_900,
    },
    cellSecondary: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 9,
        fontWeight: 'bold',
        color: COLORS.SLATE_500,
    },
    // Divider
    vDivider: {
        width: 1,
        height: '70%',
        backgroundColor: COLORS.SLATE_200,
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 45,
        right: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        borderTopWidth: 2,
        borderTopColor: COLORS.YELLOW,
    },
    footerBrand: {
        fontSize: 9,
        fontWeight: 'extrabold',
        color: COLORS.GREEN,
    },
    pageInfo: {
        fontSize: 8,
        color: COLORS.SLATE_500,
        fontWeight: 'bold',
    }
});

const DataRow = ({ data, index, colCount = 4 }) => {
    const isFive = colCount === 5;
    const bg = index % 2 === 0 ? COLORS.WHITE : COLORS.SOFT_YELLOW;

    return (
        <View style={[styles.dataRow, { backgroundColor: bg }]}>
            {isFive ? (
                <>
                    <View style={[styles.cellPrimary, { flex: 1.2, color: COLORS.GREEN }]}><Text>{data.shape}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellPrimary}><Text>{data.mm}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellSecondary}><Text>{data.inch}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellPrimary}><Text>{data.openMm}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellSecondary}><Text>{data.coverMm}</Text></View>
                </>
            ) : data.clearMm ? (
                <>
                    <View style={styles.cellPrimary}><Text>{data.mm}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellSecondary}><Text>{data.inch}</Text></View>
                    <View style={[styles.vDivider, { backgroundColor: COLORS.YELLOW, width: 2 }]} />
                    <View style={styles.cellPrimary}><Text>{data.clearMm}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={styles.cellSecondary}><Text>{data.clearInch}</Text></View>
                </>
            ) : (
                <>
                    <View style={[styles.cellPrimary, { flex: 1 }]}><Text>{data.mm}</Text></View>
                    <View style={styles.vDivider} />
                    <View style={[styles.cellSecondary, { flex: 1 }]}><Text>{data.inch}</Text></View>
                </>
            )}
        </View>
    );
};

const StandardTable = ({ data, num, title, load, cols = ['MM', 'INCH', 'MM', 'INCH'] }) => (
    <View style={styles.section} wrap={false}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>{num}</Text>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <View style={styles.tableContainer}>
            {load && <Text style={styles.tonneHeader}>LOAD CAPACITY: {load}</Text>}
            <View style={styles.groupHeader}>
                {cols.length === 4 ? (
                    <>
                        <Text style={styles.groupCell}>OUTER FRAME</Text>
                        <Text style={styles.groupCell}>CLEAR OPENING</Text>
                    </>
                ) : (
                    <Text style={styles.groupCell}>DIMENSIONS & SPECIFICATIONS</Text>
                )}
            </View>
            <View style={styles.subHeader}>
                {cols.map((c, i) => (
                    <React.Fragment key={i}>
                        <View style={styles.subCell}><Text>{c}</Text></View>
                        {i < cols.length - 1 && <View style={styles.vDivider} />}
                    </React.Fragment>
                ))}
            </View>
            {data.map((row, i) => <DataRow data={row} index={i} key={i} colCount={cols.length} />)}
        </View>
    </View>
);

const RecessedTable = ({ data, num, title }) => (
    <View style={styles.section} wrap={false}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>{num}</Text>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <View style={styles.tableContainer}>
            <View style={styles.groupHeader}>
                <View style={{ flex: 1, borderRightWidth: 1.5, borderRightColor: COLORS.WHITE }}><Text style={styles.groupCell}>LOAD CAPACITY</Text></View>
                <View style={{ flex: 2, borderRightWidth: 1.5, borderRightColor: COLORS.WHITE }}><Text style={styles.groupCell}>FRAME CLEAR OPENING</Text></View>
                <View style={{ flex: 1 }}><Text style={styles.groupCell}>RECESS DEPTH</Text></View>
            </View>
            <View style={styles.subHeader}>
                <View style={[styles.subCell, { flex: 1 }]}><Text>TONNES</Text></View>
                <View style={styles.vDivider} />
                <View style={[styles.subCell, { flex: 1 }]}><Text>MM</Text></View>
                <View style={styles.vDivider} />
                <View style={[styles.subCell, { flex: 1 }]}><Text>INCH</Text></View>
                <View style={styles.vDivider} />
                <View style={[styles.subCell, { flex: 1 }]}><Text>STANDARD</Text></View>
            </View>
            {data.map((row, i) => (
                <View key={i} style={[styles.dataRow, i % 2 === 1 && { backgroundColor: COLORS.SLATE_50 }]}>
                    <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: COLORS.SLATE_200, justifyContent: 'center' }}>
                        <Text style={[styles.cellPrimary, { fontSize: 9, textAlign: 'center' }]}>{i === 0 ? "2.5 & 5.0" : ""}</Text>
                    </View>
                    <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: COLORS.SLATE_200 }}>
                        <Text style={styles.cellPrimary}>{row.clearMm}</Text>
                    </View>
                    <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: COLORS.SLATE_200 }}>
                        <Text style={[styles.cellSecondary, { textAlign: 'center' }]}>{row.inch}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={[styles.cellPrimary, { color: COLORS.GREEN, fontSize: 8, textAlign: 'center' }]}>{i === 0 ? "35/65 MM" : ""}</Text>
                    </View>
                </View>
            ))}
        </View>
    </View>
);

const SizeChartPDF = () => (
    <Document title="Flortek Global Technical Specifications">
        <Page size="A4" style={styles.page}>
            <View style={styles.topBar} fixed>
                <View style={styles.topBarPrimary} />
                <View style={styles.topBarSecondary} />
            </View>

            <View style={styles.header} fixed>
                <View style={styles.logoWrapper}>
                    <Image src="/images/logo.png" style={styles.logoImage} />
                </View>
                <View style={styles.certBadge}>
                    {/* <Text style={styles.isoText}>ISO 9001:2015 CERTIFIED</Text> */}
                    <Text style={styles.webLink}>www.flortekindustries.com</Text>
                </View>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Product Range Catalog</Text>
            </View>

            <StandardTable num="01" data={squareSizes} title="Square Manhole Series" load="2.5 TONNE / 5.0 TONNE" />
            <StandardTable num="02" data={rectSizes} title="Rectangular Manhole Series" load="2.5 TONNE / 5.0 TONNE" />

            <View break />

            <View style={[styles.header, { borderBottomWidth: 0, marginBottom: 15 }]}>
                <Text style={[styles.companyName, { fontSize: 18 }]}>FLORTEK INDUSTRIES</Text>
                <Text style={styles.tagline}>Technical Range Continued</Text>
            </View>

            <StandardTable num="03" data={roundSizes} title="Circular / Round Series" load="2.5 TONNE / 5.0 TONNE" />

            <StandardTable num="04" data={heavySizes} title="Heavy Duty Series" load="B125 (12.5T) / C250 (25T) / D400 (40T)" cols={['CLEAR MM', 'CLEAR INCH']} />

            <StandardTable num="05" data={gulleySizes} title="FRP/GRP Water Gulley Solutions" load="PEDESTRIAN / 5.0 TONNE" cols={['SHAPE', 'OUTER MM', 'OUTER INCH', 'OPENING', 'COVER']} />

            <RecessedTable num="06" data={recessedSizes} title="Recessed Manhole Cover Series" />

            <View style={styles.footer} fixed>
                <View>
                    <Text style={styles.footerBrand}>© FLORTEK INDUSTRIES</Text>
                </View>
                <Text style={styles.pageInfo} render={({ pageNumber, totalPages }) => (
                    `Page ${pageNumber} of ${totalPages}`
                )} />
            </View>
        </Page>
    </Document>
);

export default SizeChartPDF;
