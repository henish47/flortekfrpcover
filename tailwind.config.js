/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1B8036',
                    light: '#23A347',
                    dark: '#145C27',
                },
                secondary: {
                    DEFAULT: '#0B1B3D',
                    light: '#1E293B',
                    dark: '#050C1A',
                },
                accent: {
                    DEFAULT: '#FFC700',
                    hover: '#E6B200',
                    light: '#FEF08A',
                    yellow: '#FFC700',
                    green: '#1B8036',
                },
                surface: '#FFFFFF',
                background: '#FFFFFF'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px -5px rgba(16, 145, 72, 0.3)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
            }
        },
    },
    plugins: [],
}
