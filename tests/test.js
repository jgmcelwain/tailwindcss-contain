const postcss = require('postcss');

let expected = `
.contain-\\[strict_none\\] {
    contain: strict none
}
.contain-none {
    contain: none
}
.contain-strict {
    contain: strict
}
.contain-content {
    contain: content
}
.contain-size {
    contain: size
}
.contain-inline-size {
    contain: inline-size
}
.contain-layout {
    contain: layout
}
.contain-style {
    contain: style
}
.contain-paint {
    contain: paint
}
`;

it('produces the correct contain-* classes', () => {
  let css = postcss([
    require('tailwindcss')({
      content: [
        {
          raw: 'contain-[strict_none] contain-none contain-strict contain-content contain-size contain-inline-size contain-layout contain-style contain-paint',
        },
      ],
      plugins: [require('../')],
    }),
  ]).process('@tailwind utilities').css;

  expect(css).toBe(expected.trim());
});
