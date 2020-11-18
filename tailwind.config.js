module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['./src/**/*.svelte'],
        options: {
            // These options are passed through directly to PurgeCSS
            // Exclude smaller w/h because of current SVG mechanism.
            whitelist: [
                'w-1',
                'w-2',
                'w-3',
                'w-4',
                'w-5',
                'w-6',
                'w-8',
                'w-10',
                'h-1',
                'h-2',
                'h-3',
                'h-4',
                'h-5',
                'h-6',
                'h-8',
                'h-10',
            ],
        },
    },
    theme: {
        extend: {
            keyframes: {
                'spin-reverse': {
                    '0%': { transform: 'rotate(359deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                bounce2: {
                    '0%': { transform: 'translateY(0)' },
                    '25%': { transform: 'translateY(-15%)' },
                    '100%': { transform: 'translateY(10%)' },
                },
            },
            animation: {
                'spin-reverse': 'spin-reverse 1s linear infinite',
                bounce2: 'bounce2 1s cubic-bezier(0.5, 0.81, 0.64, 0.22) infinite',
            },
        },
    },
    variants: {},
    plugins: [],
};
