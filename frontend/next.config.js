const path = require("path");

module.exports = {
    env: {
        API: "https://api.danielchadwick.co.uk",
        GITHUB: "https://github.com/danis2gd",
        LINKEDIN: "https://linkedin.com/in/danieljchadwick",
        CV: "/curriculum_vitae.pdf",
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, "styles")
        ],
    }
};
