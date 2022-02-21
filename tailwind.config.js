module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '80': '20rem'
            }
        },
    },
    plugins: [
        require('tailwindcss-question-mark'),
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
};
