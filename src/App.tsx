import { useState, useMemo } from 'react';
import { SelectionMode } from './types';
import { defaultConfig } from './config';
import SwitchBlockComponent from './components/SwitchBlock';
import './App.css';

function App() {
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const generatedClasses = useMemo(() => {
    const classes: string[] = [];
    // Only these blocks trigger ws-flexbox (excluding flex-shrink, flex-grow, and align-self)
    const flexboxBlockIds = ['flex-direction', 'justify-content', 'align-items'];
    let hasFlexboxSelection = false;
    
    // Check if any flexbox block has a selection
    flexboxBlockIds.forEach((blockId) => {
      const selected = selections[blockId] || [];
      if (selected.length > 0 && selected.some((id) => id !== 'reset')) {
        hasFlexboxSelection = true;
      }
    });

    // Add tw-flex class if any flexbox variant is selected
    if (hasFlexboxSelection) {
      classes.push('tw-flex');
    }
    
    defaultConfig.blocks.forEach((block) => {
      const selected = selections[block.id] || [];
      selected.forEach((variantId) => {
        if (variantId !== 'reset') {
          classes.push(`${block.prefix}-${variantId}`);
        }
      });
    });

    return classes.join(' ');
  }, [selections]);

  const handleVariantToggle = (blockId: string, variantId: string, mode: SelectionMode) => {
    setSelections((prev) => {
      const current = prev[blockId] || [];
      
      if (mode === 'single') {
        // For single mode, replace selection with new one (or empty if clicking reset or same variant)
        if (variantId === 'reset' || current.includes(variantId)) {
          return { ...prev, [blockId]: [] };
        }
        return { ...prev, [blockId]: [variantId] };
      } else {
        // For multiple mode, toggle the variant
        if (variantId === 'reset') {
          return { ...prev, [blockId]: [] };
        }
        if (current.includes(variantId)) {
          return { ...prev, [blockId]: current.filter((id) => id !== variantId) };
        }
        return { ...prev, [blockId]: [...current, variantId] };
      }
    });
  };

  const handleReset = () => {
    setSelections({});
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedClasses);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy to clipboard');
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="app">
      <div className="sticky-header-section">
        <header className="app-header">
          <h1>CSS Class Generator</h1>
        </header>
        
        <div className="output-section">
          <label htmlFor="generated-classes" className="output-label">
            Generated Classes:
          </label>
          <textarea
            id="generated-classes"
            className="output-textarea"
            value={generatedClasses}
            readOnly
            rows={5}
            placeholder="Generated classes will appear here..."
          />
          <div className="button-group">
            <button onClick={handleReset} className="btn btn-reset">
              Reset All
            </button>
            <button onClick={handleCopy} className="btn btn-copy">
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
      
      <main className="app-main">

        <div className="switches-section">
          {(['block', 'flexbox', 'text', 'margin', 'padding', 'other'] as const).map((category) => {
            const categoryBlocks = defaultConfig.blocks.filter((block) => block.category === category);
            if (categoryBlocks.length === 0) return null;

            const categoryLabels: Record<typeof category, string> = {
              block: 'Block',
              text: 'Text',
              margin: 'Margin',
              padding: 'Padding',
              flexbox: 'Flexbox',
              other: 'Other',
            };

            const isExpanded = expandedCategories[category] || false;

            return (
              <div key={category} className="block-category">
                <h2 
                  className="category-heading"
                  onClick={() => toggleCategory(category)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  <span className="category-toggle-icon">{isExpanded ? '▼' : '▶'}</span>
                  {categoryLabels[category]}
                </h2>
                {isExpanded && (
                  <div className="category-blocks">
                    {categoryBlocks.map((block) => {
                      const flexDirection = selections['flex-direction']?.[0] || 'row';
                      return (
                        <SwitchBlockComponent
                          key={block.id}
                          block={block}
                          selectedVariants={selections[block.id] || []}
                          onVariantToggle={handleVariantToggle}
                          flexDirection={flexDirection}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

