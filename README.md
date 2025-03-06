# BaseCSS

[![Version](https://img.shields.io/npm/v/@tfs-8/basecss.svg)](https://www.npmjs.com/package/@tfs-8/basecss)
[![Downloads](https://img.shields.io/npm/dm/@tfs-8/basecss)](https://www.npmjs.com/package/@tfs-8/basecss)
[![Number of GitHub contributors](https://img.shields.io/github/contributors/MFM-347/BaseCSS)](https://github.com/MFM-347/BaseCSS/graphs/contributors)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MFM-347/BaseCSS)](https://github.com/MFM-347/BaseCSS/)
[![Number of GitHub stars](https://img.shields.io/github/stars/MFM-347/BaseCSS)](https://github.com/MFM-347/BaseCSS/)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/MFM-347/BaseCSS/blob/main/LICENSE)

BaseCSS is a minimal and flexible CSS library designed for fast, responsive, and maintainable web development. Ideal for developers looking for simplicity and scalability. 🌍💻

## Features ✨

- **CSS Reset**: Standardizes browser behavior for consistent styling. 🔄
- **Responsive Typography**: Automatically adjusts font sizes for optimal readability on different screen sizes. 📱💻
- **Minimal Styling**: Provides a clean slate for building custom designs. 🎨

## Using BaseCSS via NPM

### Installation

To install the package, use the following command:

```bash
npm i @tfs-8/basecss
```

### Importing

#### In Plain HTML:

Link the CSS file in your `<head>` tag:

```html
<link rel="stylesheet" href="node_modules/@tfs-8/basecss" />
```

#### In a JavaScript/TypeScript Project:

Import the CSS in your entry file:

```javascript
import "@tfs-8/basecss"
```

#### In SCSS:

If you're using SCSS:

```scss
@import "node_modules/@tfs-8/basecss";
```

## Using BaseCSS via CDN

### Installation

To use the CDN, link to the following URL:

```url
https://unpkg.com/@tfs-8/basecss
```

### Importing

#### In Plain HTML:

Link the CSS file in your `<head>` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@tfs-8/basecss" />
```

#### In a JavaScript/TypeScript Project:

Import the CSS in your entry file:

```javascript
import "https://unpkg.com/@tfs-8/basecss"
```

#### In SCSS:

If you're using SCSS:

```scss
@import "https://unpkg.com/@tfs-8/basecss";
```

## Importing Specific Parts of BaseCSS 🔧

Instead of importing the entire compiled CSS file, you can include only the specific parts you need by importing the corresponding files from the `dist` folder. This allows for greater flexibility and reduced file size. ⚡

### Available Parts

- **vars**: Variables for theming and custom properties. 🎨
- **reset**: Browser style resets. 🔄
- **type**: Responsive typography styles. 🅰️
- **utilities**: Utility classes for quick styling. ⚡
- **components**: Predefined UI components. 🔲
- **scroll**: Smooth scrolling and scrollbar styling. ⬇️

### Importing Specific Parts

#### In Plain HTML:

Link the desired CSS file in your `<head>` tag:

```html
<link rel="stylesheet" href="node_modules/@tfs-8/basecss/dist/reset.min.css" />
```

#### In a JavaScript/TypeScript Project:

Import the specific section in your entry file:

```javascript
import "@tfs-8/basecss/dist/type.min.css"
```

#### In SCSS:

If you're using SCSS:

```scss
@import "node_modules/@tfs-8/basecss/dist/utilities.min.css";
```

## Getting Started 🚀

Once BaseCSS is imported, it will:

1. Reset the default browser styles for consistency. 🔄
2. Apply responsive typography for better readability. 🅰️
3. Provide a clean slate for adding your custom styles. 🎨

You can now start building your styles on top of this foundation. 🌟

## Contributing 🤝

We want you to contributions! Please check the [CONTRIBUTING.md](https://github.com/MFM-347/BaseCSS/blob/main/CONTRIBUTING.md) for further guidelines.

## Credits

Created and maintained by [@MFM-347](https://github.com/mfm-347).

## License 📄

The code in this repository is licensed under the **MIT License**. View more info [here](https://github.com/MFM-347/BaseCSS/blob/main/LICENSE).
