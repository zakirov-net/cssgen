export type SelectionMode = 'single' | 'multiple';

export interface Variant {
  id: string;
  hint: string;
  style?: React.CSSProperties;
  previewStyle?: React.CSSProperties; // Style for preview rectangle
  icon?: React.ReactNode | ((flexDirection?: string) => React.ReactNode); // SVG icon for visual representation, can be dynamic based on flex-direction
}

export type BlockCategory = 'text' | 'margin' | 'padding' | 'flexbox' | 'other' | 'block';

export interface SwitchBlock {
  id: string;
  heading: string;
  prefix: string;
  mode: SelectionMode;
  variants: Variant[];
  category: BlockCategory;
}

export interface SwitchConfig {
  blocks: SwitchBlock[];
}

