const path = require("path");

module.exports = {
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
