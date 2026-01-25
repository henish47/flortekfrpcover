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
                    DEFAULT: '#109148', // Green (Logo Border/Dot)
                    light: '#15b058',
                    dark: '#0c7539',
                },
                secondary: {
                    DEFAULT: '#1B2A4E', // Navy (Logo Text)
                    light: '#2C3E68',
                    dark: '#0f182e',
                },
                accent: {
                    DEFAULT: '#FFC107', // Yellow (Logo Background)
                    hover: '#FFB300',
                    light: '#FFD54F',
                },
                surface: '#FFFFFF',
                background: '#f8fafc' // Ultra light blue-grey
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
