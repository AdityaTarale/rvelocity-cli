
# rvelocity-cli

![npm version](https://img.shields.io/npm/v/rvelocity-cli)


`rvelocity-cli` 
is a simple and efficient command-line tool to generate React and React Native components. It helps developers reduce repetitive tasks by automatically generating the necessary files, including component files, styles, and barrel files, based on the environment (ReactJS or React Native).

## Features

- Generate components for both ReactJS and React Native.
- Automatically creates `Component.tsx`, `styles.ts`/`styles.css`, and `index.ts` files.
- Easy-to-use CLI commands to speed up component creation.
- Reduces repetitive tasks, allowing you to focus on building features.

## Installation

To install `rvelocity-cli` globally, run:

```bash
npm install -g rvelocity-cli
```

## Usage

You can use `rvelocity-cli` to generate a new ReactJS or React Native component with a single command.

### For ReactJS:

```bash
rc g <folderName> <componentName>
```

Example:

```bash
rc g components Button
```

This will create the following structure:

```
src/components/Button/
  ├── Button.tsx
  ├── styles.css
  └── index.ts
```

### For React Native:

Use the `-rn` flag to generate React Native components.

```bash
rc g <folderName> <componentName> -rn
```

Example:

```bash
rc g components Button -rn
```

This will create the following structure:

```
src/components/Button/
  ├── Button.tsx
  ├── styles.ts
  └── index.ts
```

### Explanation of Files:

- **`Button.tsx`**: The main component file.
- **`styles.css`/`styles.ts`**: The style file for ReactJS (CSS) or React Native (StyleSheet).
- **`index.ts`**: Barrel file for easier imports.

## Example

### Generating a ReactJS Button component:

```bash
rc g components Button
```

### Generating a React Native HomeScreen component:

```bash
rc g screens HomeScreen -rn
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For any issues or feature requests, feel free to open an issue on [GitHub](https://github.com/AdityaTarale/rvelocity-cli).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [GitHub Repository](https://github.com/AdityaTarale/rvelocity-cli)
