# CSS Class Generator

A React + TypeScript + Vite application for generating CSS classes by visually selecting switches (checkboxes and radio buttons).

## Features

- **Visual Class Generation**: Select variants using switches to generate CSS class names
- **Configurable Blocks**: Easily add new switch blocks or variants in `src/config.ts`
- **Single & Multiple Selection**: Each block can be configured for single (radio) or multiple (checkbox) selection
- **Visual Previews**: Variants can include CSS styles for text or preview rectangles
- **Reset Functionality**: Each block has a reset variant, plus an overall reset button
- **Copy to Clipboard**: One-click copy of generated classes

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Configuration

All switch blocks are configured in `src/config.ts`. To add a new block or modify existing ones, edit the `defaultConfig` object.

### Example Configuration

```typescript
{
  id: 'fontsize',
  heading: 'Font size',
  prefix: 'controls-fontsize',
  mode: 'single', // or 'multiple'
  variants: [
    { id: 'reset', label: 'Reset', hint: 'Default size' },
    { id: 'l', label: 'Large', hint: 'l - 20px', style: { fontSize: '20px' } },
    { id: 'xl', label: 'Extra Large', hint: 'xl - 24px', style: { fontSize: '24px' } },
  ],
}
```

### Variant Properties

- `id`: Unique identifier (use 'reset' for reset variant)
- `label`: Display name
- `hint`: Tooltip/description text
- `style`: CSS styles applied to the label text (optional)
- `previewStyle`: CSS styles applied to a preview rectangle (optional)

## Project Structure

```
src/
  ├── components/
  │   ├── SwitchBlock.tsx    # Switch block component
  │   └── SwitchBlock.css    # Switch block styles
  ├── App.tsx                # Main app component
  ├── App.css                # App styles
  ├── main.tsx               # Entry point
  ├── config.ts              # Configuration file
  ├── types.ts               # TypeScript types
  └── index.css              # Global styles
```


