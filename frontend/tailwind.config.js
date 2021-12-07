module.exports = {
    // mode: "jit",
    darkMode: "class",
    purge: [],
    theme: {
        extend: {
            borderRadius: {
                xl: "0.9rem",
            },
            bottom: {
                "1/2": "50%",
            },
            colors: {
                gray: {
                    lightest: "#EFEFEF",
                    lighter: "#E0E0E0",
                    light: "#BBBBBB",
                    dark: "#2D2D2D",
                },
                black: {
                    dark: "#2a2a2a",
                    darkest: "#000000",
                    base: "#000000",
                },
                theme: {
                    primary: "#FF7D12",
                    dark: "#B35708",
                },
            },
            height: {
                200: "200px",
                250: "250px",
                300: "300px",
                400: "400px",
            },
            width: {
                8: "32px",
            },
            screens: {
                xs: "420px",
                lg: "1100px",
                xl: "1100px",
            },
            margin: {
                "-8r": "-8rem",
                "-14r": "-14rem",
                "-11r": "-11rem",
                "-17r": "-17rem",
                "16": "4rem",
                "18": "4.5rem",
                "28": "7rem",
                "60": "60px",
                "75": "75px",
            },
            minHeight: {
                "60": "60px",
                "300": "300px",
                "400": "400px",
            },
            maxHeight: {
                "30": "30px",
                "35": "35px",
                "4r": "4rem",
                "300": "300px",
                "400": "400px",
            },
            maxWidth: {
                "30": "30px",
                "35": "35px",
                "4r": "4rem",
                "1280": "1280px",
            },
            zIndex: {
                base: 0,
                content: 5,
                overlay: 25,
                modal: 100,
            }
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        require('precss'),
        require('autoprefixer'),
    ],
};
