import React from 'react';

// ───────────────────────────────
// Color palette for items
// ───────────────────────────────
const C = {
  blue: '#4A90D9',
  purple: '#9B59B6',
  green: '#2ECC71',
  gray: '#999',
  dark: '#555',
  containerStroke: '#aaa',
};

// ───────────────────────────────
// Helpers
// ───────────────────────────────

/** Dashed container rect (reused across justify & align icons) */
const Container: React.FC<{ x?: number; y?: number; w?: number; h?: number; children?: React.ReactNode }> = ({
  x = 1, y = 5, w = 22, h = 14, children,
}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x={x} y={y} width={w} height={h} rx={1.5} stroke={C.containerStroke} strokeWidth={0.8} strokeDasharray="2 1.5" fill="none" />
    {children}
  </svg>
);

// ───────────────────────────────
// Flex-direction icons
// ───────────────────────────────

/** Items in a horizontal row → */
export const FlexDirectionRow: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="9" width="5" height="6" rx="1" fill={C.blue} />
    <rect x="9" y="9" width="5" height="6" rx="1" fill={C.purple} />
    <rect x="16" y="9" width="5" height="6" rx="1" fill={C.green} />
    <path d="M22 12l-3-2v4z" fill={C.dark} />
  </svg>
);

/** Items in a horizontal row ← */
export const FlexDirectionRowReverse: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="9" width="5" height="6" rx="1" fill={C.green} />
    <rect x="9" y="9" width="5" height="6" rx="1" fill={C.purple} />
    <rect x="16" y="9" width="5" height="6" rx="1" fill={C.blue} />
    <path d="M2 12l3-2v4z" fill={C.dark} />
  </svg>
);

/** Items stacked vertically ↓ */
export const FlexDirectionColumn: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="2" width="6" height="5" rx="1" fill={C.blue} />
    <rect x="9" y="9" width="6" height="5" rx="1" fill={C.purple} />
    <rect x="9" y="16" width="6" height="5" rx="1" fill={C.green} />
    <path d="M12 22l-2-3h4z" fill={C.dark} />
  </svg>
);

/** Items stacked vertically ↑ */
export const FlexDirectionColumnReverse: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="2" width="6" height="5" rx="1" fill={C.green} />
    <rect x="9" y="9" width="6" height="5" rx="1" fill={C.purple} />
    <rect x="9" y="16" width="6" height="5" rx="1" fill={C.blue} />
    <path d="M12 2l-2 3h4z" fill={C.dark} />
  </svg>
);

// ─────────────────────────────────────────────
// Justify-content icons (row — main axis →)
// Items are vertical bars to show distribution
// ─────────────────────────────────────────────

export const JustifyStart: React.FC = () => (
  <Container>
    <rect x="2.5" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="8" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="13.5" y="7" width="4" height="10" rx="1" fill={C.green} />
    <path d="M19 19l3-3-3-3" stroke={C.gray} strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Container>
);

export const JustifyEnd: React.FC = () => (
  <Container>
    <rect x="6.5" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="12" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="17.5" y="7" width="4" height="10" rx="1" fill={C.green} />
    <path d="M5 19l-3-3 3-3" stroke={C.gray} strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Container>
);

export const JustifyCenter: React.FC = () => (
  <Container>
    <rect x="4.5" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="10" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="15.5" y="7" width="4" height="10" rx="1" fill={C.green} />
    <path d="M19 19l-1-2-4-3" stroke={C.gray} strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    <path d="M5 19l1-2 4-3" stroke={C.gray} strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
  </Container>
);

export const JustifySpaceBetween: React.FC = () => (
  <Container>
    <rect x="2.5" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="10" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="17.5" y="7" width="4" height="10" rx="1" fill={C.green} />
    <line x1="8.5" y1="19" x2="8.5" y2="17" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
    <line x1="15.5" y1="19" x2="15.5" y2="17" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
  </Container>
);

export const JustifySpaceAround: React.FC = () => (
  <Container>
    <rect x="2" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="10" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="18" y="7" width="4" height="10" rx="1" fill={C.green} />
    <line x1="7" y1="19" x2="7" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
    <line x1="13" y1="19" x2="13" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <line x1="22" y1="19" x2="22" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
  </Container>
);

export const JustifySpaceEvenly: React.FC = () => (
  <Container>
    <rect x="2.5" y="7" width="4" height="10" rx="1" fill={C.blue} />
    <rect x="10" y="7" width="4" height="10" rx="1" fill={C.purple} />
    <rect x="17.5" y="7" width="4" height="10" rx="1" fill={C.green} />
    <line x1="7.5" y1="19" x2="7.5" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
    <line x1="14.5" y1="19" x2="14.5" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
    <line x1="1" y1="19" x2="1" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
    <line x1="23" y1="19" x2="23" y2="16" stroke={C.gray} strokeWidth="0.8" strokeLinecap="round" />
  </Container>
);

// ─────────────────────────────────────────────
// Align-items icons (row — cross-axis ↓)
// Items of different heights show vertical alignment
// ─────────────────────────────────────────────

/** Items aligned to top */
export const AlignStart: React.FC = () => (
  <Container>
    <rect x="3" y="6" width="4" height="8" rx="1" fill={C.blue} />
    <rect x="9.5" y="6" width="4" height="5" rx="1" fill={C.purple} />
    <rect x="16" y="6" width="4" height="11" rx="1" fill={C.green} />
    <line x1="1" y1="6" x2="23" y2="6" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** Items aligned to bottom */
export const AlignEnd: React.FC = () => (
  <Container>
    <rect x="3" y="10" width="4" height="4" rx="1" fill={C.blue} />
    <rect x="9.5" y="12" width="4" height="2" rx="1" fill={C.purple} />
    <rect x="16" y="7" width="4" height="7" rx="1" fill={C.green} />
    <line x1="1" y1="17" x2="23" y2="17" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** Items centered vertically */
export const AlignCenter: React.FC = () => (
  <Container>
    <rect x="3" y="7" width="4" height="6" rx="1" fill={C.blue} />
    <rect x="9.5" y="8.5" width="4" height="3" rx="1" fill={C.purple} />
    <rect x="16" y="5.5" width="4" height="9" rx="1" fill={C.green} />
    <line x1="1" y1="12" x2="23" y2="12" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** Items stretched to full container height */
export const AlignStretch: React.FC = () => (
  <Container>
    <rect x="3" y="5" width="4" height="14" rx="1" fill={C.blue} />
    <rect x="9.5" y="5" width="4" height="14" rx="1" fill={C.purple} />
    <rect x="16" y="5" width="4" height="14" rx="1" fill={C.green} />
    <path d="M2.5 5l-1-2M2.5 19l-1 2" stroke={C.blue} strokeWidth="0.8" strokeLinecap="round" />
    <path d="M21.5 5l1-2M21.5 19l1 2" stroke={C.green} strokeWidth="0.8" strokeLinecap="round" />
  </Container>
);

/** Items aligned to baseline (dashed base-line) */
export const AlignBaseline: React.FC = () => (
  <Container>
    <line x1="2" y1="15" x2="22" y2="15" stroke={C.gray} strokeWidth="0.8" strokeDasharray="1.5 1.5" />
    <rect x="3" y="8" width="4" height="7" rx="1" fill={C.blue} />
    <rect x="9.5" y="10" width="4" height="5" rx="1" fill={C.purple} />
    <rect x="16" y="5" width="4" height="10" rx="1" fill={C.green} />
    <line x1="3" y1="15" x2="7" y2="15" stroke={C.blue} strokeWidth="1.5" />
    <line x1="9.5" y1="15" x2="13.5" y2="15" stroke={C.purple} strokeWidth="1.5" />
    <line x1="16" y1="15" x2="20" y2="15" stroke={C.green} strokeWidth="1.5" />
  </Container>
);

// ────────────────────────────────────────────────────────────
// Align-items icons for column mode (cross-axis →)
// Items of different widths show horizontal alignment
// ────────────────────────────────────────────────────────────

/** In column: items aligned to left */
export const AlignStartColumn: React.FC = () => (
  <Container x={5} y={1} w={14} h={22}>
    <rect x="5" y="3" width="8" height="4" rx="1" fill={C.blue} />
    <rect x="5" y="9.5" width="5" height="4" rx="1" fill={C.purple} />
    <rect x="5" y="16" width="11" height="4" rx="1" fill={C.green} />
    <line x1="5" y1="1" x2="5" y2="23" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** In column: items aligned to right */
export const AlignEndColumn: React.FC = () => (
  <Container x={5} y={1} w={14} h={22}>
    <rect x="11" y="3" width="8" height="4" rx="1" fill={C.blue} />
    <rect x="14" y="9.5" width="5" height="4" rx="1" fill={C.purple} />
    <rect x="8" y="16" width="11" height="4" rx="1" fill={C.green} />
    <line x1="19" y1="1" x2="19" y2="23" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** In column: items centered horizontally */
export const AlignCenterColumn: React.FC = () => (
  <Container x={5} y={1} w={14} h={22}>
    <rect x="8" y="3" width="8" height="4" rx="1" fill={C.blue} />
    <rect x="9.5" y="9.5" width="5" height="4" rx="1" fill={C.purple} />
    <rect x="6.5" y="16" width="11" height="4" rx="1" fill={C.green} />
    <line x1="12" y1="1" x2="12" y2="23" stroke={C.blue} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
  </Container>
);

/** In column: items stretched to full container width */
export const AlignStretchColumn: React.FC = () => (
  <Container x={5} y={1} w={14} h={22}>
    <rect x="5" y="2.5" width="14" height="4" rx="1" fill={C.blue} />
    <rect x="5" y="9.5" width="14" height="4" rx="1" fill={C.purple} />
    <rect x="5" y="16.5" width="14" height="4" rx="1" fill={C.green} />
    <path d="M5 2l-2-1M5 4l-2 1" stroke={C.blue} strokeWidth="0.8" strokeLinecap="round" />
    <path d="M19 2l2-1M19 4l2 1" stroke={C.green} strokeWidth="0.8" strokeLinecap="round" />
  </Container>
);

// ─────────────────────────────────────────────
// Dynamic icon functions (adapt to flex-direction)
// ─────────────────────────────────────────────

/**
 * Flex-direction variants are stored as Tailwind-style ids (`row`, `row-reverse`,
 * `col`, `col-reverse`), but plain CSS values (`column`, `column-reverse`) are
 * accepted too so the icons stay in sync with whatever the config/id uses.
 */
export type FlexAxis = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const normalizeFlexDirection = (direction?: string): FlexAxis => {
  const value = (direction || 'row').trim().toLowerCase().replace(/^flex-/, '');
  switch (value) {
    case 'col':
    case 'column':
      return 'column';
    case 'col-reverse':
    case 'column-reverse':
      return 'column-reverse';
    case 'row-reverse':
      return 'row-reverse';
    default:
      return 'row';
  }
};

/** Check if flex-direction is a column variant */
const isColumnDirection = (dir?: string) => {
  const axis = normalizeFlexDirection(dir);
  return axis === 'column' || axis === 'column-reverse';
};

/**
 * Rotation (in degrees) of the row-based icon so it matches the main axis
 * direction of the current flex-direction:
 * - row           → → (0°)
 * - row-reverse   → ← (180°)
 * - column        → ↓ (90°)
 * - column-reverse→ ↑ (270°)
 */
const mainAxisRotation: Record<FlexAxis, number> = {
  row: 0,
  'row-reverse': 180,
  column: 90,
  'column-reverse': 270,
};

/** Wrap an icon in a rotated box (returns it untouched when angle is 0) */
const rotateIcon = (angle: number, baseIcon: React.ReactNode) => {
  if (!angle) return baseIcon;
  return (
    <div
      style={{
        transform: `rotate(${angle}deg)`,
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {baseIcon}
    </div>
  );
};

/**
 * For justify-content:
 * - row / row-reverse     → items distributed horizontally (main axis →/←)
 * - column / col-reverse  → same icon rotated 90°/270° (main axis ↓/↑)
 */
export const getJustifyIcon = (direction: string | undefined, baseIcon: React.ReactNode) =>
  rotateIcon(mainAxisRotation[normalizeFlexDirection(direction)], baseIcon);

/**
 * For align-items:
 * - row mode  → items aligned along cross axis (vertical ↓)
 * - col mode  → items aligned along cross axis (horizontal →)
 * Column variants have separate SVG components, so the row icon is only
 * rotated here as a generic fallback.
 */
export const getAlignIcon = (direction: string | undefined, baseIcon: React.ReactNode) =>
  isColumnDirection(direction) ? rotateIcon(90, baseIcon) : baseIcon;

// ─────────────────────────────────────────────
// Justify-content dynamic wrappers
// ─────────────────────────────────────────────

export const JustifyStartDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifyStart />);

export const JustifyEndDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifyEnd />);

export const JustifyCenterDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifyCenter />);

export const JustifySpaceBetweenDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifySpaceBetween />);

export const JustifySpaceAroundDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifySpaceAround />);

export const JustifySpaceEvenlyDynamic = (flexDirection?: string) =>
  getJustifyIcon(flexDirection || 'row', <JustifySpaceEvenly />);

// ─────────────────────────────────────────────
// Align-items dynamic wrappers
// ─────────────────────────────────────────────

export const AlignStartDynamic = (flexDirection?: string) => {
  const axis = normalizeFlexDirection(flexDirection);
  // In column-reverse the cross axis is flipped, so flex-start is on the right
  if (axis === 'column') return <AlignStartColumn />;
  if (axis === 'column-reverse') return <AlignEndColumn />;
  return <AlignStart />;
};

export const AlignEndDynamic = (flexDirection?: string) => {
  const axis = normalizeFlexDirection(flexDirection);
  // In column-reverse the cross axis is flipped, so flex-end is on the left
  if (axis === 'column') return <AlignEndColumn />;
  if (axis === 'column-reverse') return <AlignStartColumn />;
  return <AlignEnd />;
};

export const AlignCenterDynamic = (flexDirection?: string) => {
  if (isColumnDirection(flexDirection)) return <AlignCenterColumn />;
  return <AlignCenter />;
};

export const AlignStretchDynamic = (flexDirection?: string) => {
  if (isColumnDirection(flexDirection)) return <AlignStretchColumn />;
  return <AlignStretch />;
};

/**
 * Baseline alignment runs along the cross axis:
 * - row mode            → horizontal baseline (untouched icon)
 * - column mode         → rotate 90° (baseline becomes vertical, items extend right)
 * - column-reverse mode → rotate 270° (baseline becomes vertical, items extend left)
 */
export const AlignBaselineDynamic = (flexDirection?: string) => {
  const axis = normalizeFlexDirection(flexDirection);
  if (axis === 'column') return rotateIcon(90, <AlignBaseline />);
  if (axis === 'column-reverse') return rotateIcon(270, <AlignBaseline />);
  return <AlignBaseline />;
};

