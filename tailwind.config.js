module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                persoBlue: '#119DA4',
                lightColor: '#F9F7F3',
                darkColor: '#063537'
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}