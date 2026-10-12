# CSS Class Generator

A React + TypeScript + Vite application for generating CSS class names by visually selecting from switch blocks (checkboxes and radio buttons).

## Features

- **Visual Class Generation**: Select variants using switches to generate CSS class names
- **Configurable Blocks**: Easily add new switch blocks or variants in `src/config.ts`
- **Single & Multiple Selection**: Each block can be configured for single (radio) or multiple (checkbox) selection
- **Visual Previews**: Variants can include inline CSS styles, preview rectangles, or SVG icons
- **Dynamic SVG Icons**: Flexbox icons adapt to the current `flex-direction` value
- **Category Grouping**: Blocks are grouped by category (Flexbox, Block, Text, Margin, Padding, Other) with expandable/collapsible sections
- **Reset Functionality**: Each block has a reset variant, plus an overall reset button
- **Copy to Clipboard**: One-click copy of generated classes
- **Full-Width Two-Column Layout**: Left panel (~30%) with fixed header and output area, right panel (~70%) with scrollable settings

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

## Layout

The application uses a full-width two-column layout:

- **Left panel** (~30% width, sticky/fixed position):
  - App header title
  - Output textarea showing generated CSS classes
  - "Reset All" and "Copy to Clipboard" buttons

- **Right panel** (~70% width, independently scrollable):
  - Category sections (Flexbox, Block, Text, Margin, Padding, Other)
  - Each category is expandable/collapsible
  - Switch blocks with visual selectors

On screens narrower than 768px the layout stacks vertically.

## Configuration

All switch blocks are configured in `src/config.ts`. To add a new block or modify existing ones, edit the `defaultConfig` object.

### Example Configuration

```typescript
{
  id: 'fontsize',
  heading: 'Font Size',
  prefix: 'controls-fontsize',
  mode: 'single', // or 'multiple'
  category: 'text',
  variants: [
    { id: 'reset', hint: 'Default size' },
    { id: 'l', hint: '20px', style: { fontSize: '20px' } },
    { id: 'xl', hint: '24px', style: { fontSize: '24px' } },
  ],
}
```

### Variant Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier (use `'reset'` for reset variant) |
| `hint` | `string` | Tooltip / description text shown below the label |
| `style` | `React.CSSProperties` | CSS styles applied to the label text *(optional)* |
| `previewStyle` | `React.CSSProperties` | CSS styles applied to a preview rectangle *(optional)* |
| `icon` | `ReactNode \| ((flexDirection?: string) => ReactNode)` | SVG icon for visual representation, can be a function that receives the current `flex-direction` *(optional)* |

### Block Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique block identifier |
| `heading` | `string` | Block heading displayed to the user |
| `prefix` | `string` | Prefix prepended to the selected variant ID when generating classes |
| `mode` | `'single' \| 'multiple'` | `'single'` renders radio buttons, `'multiple'` renders checkboxes |
| `category` | `'text' \| 'margin' \| 'padding' \| 'flexbox' \| 'other' \| 'block'` | Category for grouping |
| `variants` | `Variant[]` | Array of selectable variants |

## Flexbox Icons

Dynamic SVG icons in `src/components/FlexboxIcons.tsx` visually represent flexbox properties. Icons for `justify-content` and `align-items` accept the current `flex-direction` as a parameter so the visual preview adapts to `row`, `row-reverse`, `col`, or `col-reverse`.

## Project Structure

```
src/
  ├── components/
  │   ├── FlexboxIcons.tsx       # Dynamic SVG icons for flexbox variants
  │   ├── SwitchBlock.tsx        # Switch block component
  │   └── SwitchBlock.css        # Switch block styles
  ├── App.tsx                    # Main app component with two-column layout
  ├── App.css                    # App styles (layout, buttons, categories)
  ├── main.tsx                   # Entry point
  ├── config.ts                  # Switch block configuration
  ├── types.ts                   # TypeScript type definitions
  └── index.css                  # Global styles
```


