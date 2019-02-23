const atImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [atImport(), tailwindcss('./tailwind.js')],
};
