const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require("path");

module.exports = (phase) => {
    const baseConfig = {
        env: {
            API: "https://api.danielchadwick.co.uk",
            GITHUB: "https://github.com/danieljameschadwick",
            LINKEDIN: "https://linkedin.com/in/danieljchadwick",
            CV: "/curriculum_vitae.pdf",
        },
        sassOptions: {
            includePaths: [
                path.join(__dirname, "styles")
            ],
        },
        typescript: {
            // @TODO: remove typing issues, testing Vercel builds
            ignoreBuildErrors: true,
        },
    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...baseConfig,
            env: {
                ...baseConfig.env,
                API: "http://localhost:3000/api",
            },
        }
    }

    return baseConfig;
};
