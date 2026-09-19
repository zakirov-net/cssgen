import React from 'react';

// Flex direction icons
export const FlexDirectionRow: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="8" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="14" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const FlexDirectionRowReverse: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="12" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="6" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="2" y="10" width="4" height="4" fill="#666" rx="1"/>
    <path d="M2 12 L6 12" stroke="#999" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
    <defs>
      <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
        <polygon points="0 0, 4 2, 0 4" fill="#999"/>
      </marker>
    </defs>
  </svg>
);

export const FlexDirectionColumn: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="8" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="14" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="18" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const FlexDirectionColumnReverse: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="12" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="6" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="2" width="4" height="4" fill="#666" rx="1"/>
    <path d="M12 18 L12 22" stroke="#999" strokeWidth="1.5" markerEnd="url(#arrowhead2)"/>
    <defs>
      <marker id="arrowhead2" markerWidth="4" markerHeight="4" refX="2" refY="3" orient="auto">
        <polygon points="0 0, 4 2, 0 4" fill="#999"/>
      </marker>
    </defs>
  </svg>
);

// Justify-content icons
export const JustifyStart: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="8" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="14" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const JustifyEnd: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="12" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const JustifyCenter: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="16" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const JustifySpaceBetween: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const JustifySpaceAround: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="10" width="3" height="4" fill="#666" rx="1"/>
    <rect x="6" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="12" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="20" y="10" width="3" height="4" fill="#666" rx="1"/>
  </svg>
);

export const JustifySpaceEvenly: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="3" height="4" fill="#666" rx="1"/>
    <rect x="7" y="10" width="3" height="4" fill="#666" rx="1"/>
    <rect x="12" y="10" width="3" height="4" fill="#666" rx="1"/>
    <rect x="17" y="10" width="3" height="4" fill="#666" rx="1"/>
  </svg>
);

// Align-items icons
export const AlignStart: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="8" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="14" y="2" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const AlignEnd: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="18" width="4" height="4" fill="#666" rx="1"/>
    <rect x="8" y="18" width="4" height="4" fill="#666" rx="1"/>
    <rect x="14" y="18" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const AlignCenter: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="8" y="10" width="4" height="4" fill="#666" rx="1"/>
    <rect x="14" y="10" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const AlignStretch: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="4" height="20" fill="#666" rx="1"/>
    <rect x="8" y="2" width="4" height="20" fill="#666" rx="1"/>
    <rect x="14" y="2" width="4" height="20" fill="#666" rx="1"/>
  </svg>
);

export const AlignBaseline: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="18" x2="22" y2="18" stroke="#999" strokeWidth="1.5" strokeDasharray="2 2"/>
    <rect x="2" y="10" width="4" height="8" fill="#666" rx="1"/>
    <rect x="8" y="8" width="4" height="10" fill="#666" rx="1"/>
    <rect x="14" y="12" width="4" height="6" fill="#666" rx="1"/>
  </svg>
);

// Icons for align-items in column mode (items stacked vertically, aligned horizontally)
export const AlignStartColumn: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="2" y="8" width="4" height="4" fill="#666" rx="1"/>
    <rect x="2" y="14" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const AlignEndColumn: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="8" width="4" height="4" fill="#666" rx="1"/>
    <rect x="18" y="14" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

export const AlignCenterColumn: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="2" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="8" width="4" height="4" fill="#666" rx="1"/>
    <rect x="10" y="14" width="4" height="4" fill="#666" rx="1"/>
  </svg>
);

// Dynamic icon functions that adapt based on flex-direction
export const getJustifyIcon = (direction: string, baseIcon: React.ReactNode) => {
  const isColumn = direction === 'column' || direction === 'column-reverse';
  if (isColumn) {
    // For column direction, rotate the icon 90 degrees
    return (
      <div style={{ transform: 'rotate(90deg)', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {baseIcon}
      </div>
    );
  }
  return baseIcon;
};

export const getAlignIcon = (direction: string, baseIcon: React.ReactNode) => {
  const isColumn = direction === 'column' || direction === 'column-reverse';
  if (isColumn) {
    // For column direction, use horizontal alignment icons (justify icons)
    return baseIcon;
  }
  // For row direction, use vertical alignment icons (current align icons)
  return baseIcon;
};

// Wrapper functions for justify-content icons
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

// Wrapper functions for align-items/icons
export const AlignStartDynamic = (flexDirection?: string) => {
  const isColumn = flexDirection === 'column' || flexDirection === 'column-reverse';
  if (isColumn) {
    // For column, align-items controls horizontal axis - items stacked vertically, aligned horizontally (left)
    return <AlignStartColumn />;
  }
  // For row, align-items controls vertical axis - items arranged horizontally, aligned vertically (top)
  return <AlignStart />;
};

export const AlignEndDynamic = (flexDirection?: string) => {
  const isColumn = flexDirection === 'column' || flexDirection === 'column-reverse';
  if (isColumn) {
    // For column, align-items controls horizontal axis - items stacked vertically, aligned horizontally (right)
    return <AlignEndColumn />;
  }
  // For row, align-items controls vertical axis - items arranged horizontally, aligned vertically (bottom)
  return <AlignEnd />;
};

export const AlignCenterDynamic = (flexDirection?: string) => {
  const isColumn = flexDirection === 'column' || flexDirection === 'column-reverse';
  if (isColumn) {
    // For column, align-items controls horizontal axis - items stacked vertically, aligned horizontally (center)
    return <AlignCenterColumn />;
  }
  // For row, align-items controls vertical axis - items arranged horizontally, aligned vertically (center)
  return <AlignCenter />;
};

export const AlignStretchDynamic = (flexDirection?: string) => {
  const isColumn = flexDirection === 'column' || flexDirection === 'column-reverse';
  if (isColumn) {
    // For column, stretch means horizontal stretch
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="20" height="4" fill="#666" rx="1"/>
        <rect x="2" y="10" width="20" height="4" fill="#666" rx="1"/>
        <rect x="2" y="10" width="20" height="4" fill="#666" rx="1"/>
      </svg>
    );
  }
  return <AlignStretch />;
};

export const AlignBaselineDynamic = (_flexDirection?: string) => {
  // Baseline alignment works the same way regardless of flex-direction
  // It aligns items to their text baseline, which is always horizontal
  return <AlignBaseline />;
};

