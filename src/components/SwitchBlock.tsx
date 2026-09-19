import { SwitchBlock as SwitchBlockType, SelectionMode } from '../types';
import './SwitchBlock.css';

interface SwitchBlockProps {
  block: SwitchBlockType;
  selectedVariants: string[];
  onVariantToggle: (blockId: string, variantId: string, mode: SelectionMode) => void;
  flexDirection?: string; // Current flex-direction value
}

export default function SwitchBlockComponent({
  block,
  selectedVariants,
  onVariantToggle,
  flexDirection,
}: SwitchBlockProps) {
  const handleChange = (variantId: string) => {
    onVariantToggle(block.id, variantId, block.mode);
  };

  const isSelected = (variantId: string) => selectedVariants.includes(variantId);

  return (
    <div className="switch-block">
      <h2 className="switch-block-heading">{block.heading}</h2>
      <div className="switch-block-variants">
        {block.variants.map((variant) => {
          const selected = isSelected(variant.id);
          
          return (
            <label
              key={variant.id}
              className={`switch-variant ${selected ? 'selected' : ''} ${
                variant.id === 'reset' ? 'reset-variant' : ''
              }`}
            >
              <input
                type={block.mode === 'single' ? 'radio' : 'checkbox'}
                name={block.mode === 'single' ? block.id : undefined}
                checked={selected}
                onChange={() => handleChange(variant.id)}
                className="switch-input"
              />
              <div className="switch-content">
                {variant.icon && (
                  <div 
                    className="switch-icon"
                    style={variant.previewStyle}
                  >
                    {typeof variant.icon === 'function' ? variant.icon(flexDirection) : variant.icon}
                  </div>
                )}
                {variant.previewStyle && !variant.icon && (
                  <div
                    className="switch-preview"
                    style={variant.previewStyle}
                  />
                )}
                <div className="switch-label-group">
                  <span
                    className="switch-label"
                    style={variant.style}
                  >
                    {variant.id}
                  </span>
                  <span className="switch-hint">{variant.hint}</span>
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

