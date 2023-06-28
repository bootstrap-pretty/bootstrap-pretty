# Bootstrap Pretty

> Heads up! Bootstrap Pretty is in the early stages of development and may not be suitable for production environments.

## Install

Install with npm: `npm install bootstrap-pretty`

Install with yarn: `yarn add bootstrap-pretty`

## Recommended Style File Structure

For Bootstrap Pretty SCSS to compile with minimal changes, the recommended file structure is below:

```
styles/
├── custom/
│   ├── _variables.scss
│   ├── _additional-styles.scss
└── styles.scss
```

## Installing a Theme

1. Head over to the [Bootstrap Pretty](https://bootstrappretty.dev/) docs and pick a theme.
1. On your chosen theme's docs page, navigate to Customize > SASS, for example `https://bootstrappretty.dev/palettes/dracula/#sass`.
1. Copy the file in this section and name it `styles.scss` and place it into the recommended file structure above.
1. Compile with the framework you are using and be sure to reference the compiled CSS in the `<head>` of your document.

## Bugs and Feature Request

Have a bug or a feature request? File an issue in [Bootstrap Pretty](https://github.com/bootstrap-pretty/bootstrap-pretty/issues).

## Contributing

Pull requests are welcome! 