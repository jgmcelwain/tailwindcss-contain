const plugin = require('tailwindcss/plugin');

const contains = [
  'none',
  'strict',
  'content',
  'size',
  'inline-size',
  'layout',
  'style',
  'paint',
].reduce((prev, value) => ({ ...prev, [value]: value }), {});

const contain = plugin(
  function ({ theme, matchUtilities }) {
    matchUtilities(
      {
        contain: (value) => ({
          contain: value,
        }),
      },
      { values: theme('contains') }
    );
  },
  { theme: { contains } }
);

module.exports = contain;
