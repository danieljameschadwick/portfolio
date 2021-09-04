const path = require('path');

module.exports = {
    env: {
        API: 'https://api.danielchadwick.co.uk'
    },
    typescript: {
        // @TODO: hot fix just to test out Netlify
        ignoreBuildErrors: true,
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles')
        ],
    }
};
