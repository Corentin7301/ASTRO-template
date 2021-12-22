module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                persoMainColor: '#f35d07',
                lightColor: '#e2e5e9',
                darkColor: '#1f2937'
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}