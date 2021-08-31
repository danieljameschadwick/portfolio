const withLess = require('@zeit/next-less');

module.exports = withLess({
    // @TODO: hot fix just to test out Netlify
    ignoreBuildErrors: true,
});
