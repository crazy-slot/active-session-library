const withTM = require('next-transpile-modules')(['active-session-library']);

module.exports = withTM({
	reactStrictMode: true,
});
