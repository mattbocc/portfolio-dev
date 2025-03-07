/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
    darkMode: 'class',
    theme: {
        screens: {
            lg: { max: '1500px' },
            md: { max: '1050px' },
            smd: { max: '700px' },
            sm: { max: '550px' },
            xs: { max: '450px' },
            burger: { min: '550px' }
        },
        extend: {
            colors: {
                gray: {
                    50: '#fafafa',
                    200: '#e9e9e9',
                    400: '#b5b5b5',
                    600: '#717171',
                    700: '#727272',
                    900: '#212121',
                    1000: '#D9D9D9'
                },
                open_border: '#B6B6B6'
            },
            fontFamily: { inter: 'Inter' },
            fontSize: {
                heading3Xl: ['32px', '40px'],
                heading2Xl: ['28px', '32px'],
                headingXl: ['24px', '28px'],
                headingLg: ['20px', '24px'],
                headingMd: ['16px', '20px'],
                headingSm: ['14px', '16px'],
                headingXs: ['12px', '16px'],
                bodyMd: ['14px', '20px'],
                bodySm: ['12px', '16px'],
                bodyXs: ['11px', '14px']
            },
            boxShadow: {
                card: '0px 2px 1px 0px #0000000d',
                button: '0px 1px 0px 0px rgba(0, 0, 0, 0.05)'
            },
            transitionProperty: {
                width: 'width',
                transition: 'transition'
            },
            borderWidth: {
                1: '1px',
                1.5: '1.5px'
            },
            spacing: {
                800: '800px',
                50: '196px'
            }
        }
    },
    plugins: []
};
