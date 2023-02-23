const plugin = require('tailwindcss/plugin');

const contain = plugin(function ({ addUtilities, matchUtilities }) {
  matchUtilities({
    contain: (value) => ({
      contain: value,
    }),
  });

  addUtilities({
    '.contain-none': {
      contain: 'none',
    },
    '.contain-strict': {
      contain: 'strict',
    },
    '.contain-content': {
      contain: 'content',
    },
    '.contain-size': {
      contain: 'size',
    },
    '.contain-inline-size': {
      contain: 'inline-size',
    },
    '.contain-layout': {
      contain: 'layout',
    },
    '.contain-style': {
      contain: 'style',
    },
    '.contain-paint': {
      contain: 'paint',
    },
  });
});

module.exports = contain;
