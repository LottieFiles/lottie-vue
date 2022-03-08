// babel.config.js
const { CODE_COVERAGE } = process.env;
const plugins = [];

if (CODE_COVERAGE === "true") plugins.push(['babel-plugin-istanbul', { extension: ['.js', '.vue'] }]);

module.exports = {
    presets: [
      '@vue/app'
    ],
    plugins: plugins
}