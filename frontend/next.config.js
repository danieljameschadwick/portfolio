const path = require('path');

module.exports = {
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
