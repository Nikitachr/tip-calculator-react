module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#C5E4E7',
                primary: '#00474B',
                'primary-second': '#26C2AE',
                input: '#F3F9FA',
                'input-text': '#00474B',
                placeholder: '#9EBBBD',
                text: '#5E7A7D',
                'text-second': '#7F9D9F',
                disabled: '#0D686D',
                hover: '#9FE8DF'
            },
            width: {
                '500': '500px'
            },
            backgroundColor: theme => ({
                ...theme('colors')
            }),
            maxWidth: {
                '920': '920px'
            }
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}
