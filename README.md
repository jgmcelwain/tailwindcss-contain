# DEPRECATED

This plugin is no longer necessary. Tailwind has first-class support for `contain-*` utilities.

# tailwindcss-contain

A plugin that provides utilities for the [`contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/contain) CSS property.

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-contain
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-contain'),
    // ...
  ],
};
```

## Usage

```html
<div class="relative rounded-xl contain-paint">
  <div class="absolute inset-0 bg-black"></div>
</div>
```

All `contain` keywords are available as utility classes via this plugin.

The `contain` property also supports the use of multiple keywords. You can use Tailwind's [arbitrary values](hhttps://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) to use multiple keywords with this plugin.

| CSS Rule               | Class                   |
| ---------------------- | ----------------------- |
| `contain: none`        | `contain-none`          |
| `contain: strict`      | `contain-strict`        |
| `contain: content`     | `contain-content`       |
| `contain: size`        | `contain-size`          |
| `contain: inline-size` | `contain-inline-size`   |
| `contain: layout`      | `contain-layout`        |
| `contain: style`       | `contain-style`         |
| `contain: paint`       | `contain-paint`         |
| `contain: size layout` | `contain-[size_layout]` |

Note: If using multiple keywords ensure they are separated by an underscore (`_`), rather than a space (` `).
