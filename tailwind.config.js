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
                    DEFAULT: '#000000',
                    light: '#333333',
                    dark: '#000000',
                },
                secondary: {
                    DEFAULT: '#000000',
                    light: '#333333',
                    dark: '#000000',
                },
                accent: {
                    DEFAULT: '#333333',
                    hover: '#000000',
                    light: '#D9D9D9',
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
