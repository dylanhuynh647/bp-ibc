import React, {useEffect, useRef, useContext, useState } from "react";
import './TextSettingStyle.css'
import { UIContext } from "../../context/UIContext";
import { FontEnum } from "../../enum/fontEnum";

interface TextSettingPopupUIProps {
  content: string;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

function TextSettingPopupUIComponent({ position, onClose}: TextSettingPopupUIProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);
  const uiContext = useContext(UIContext);
  const state = uiContext?.state;

  if (!state) return;
  const element = state.selectedElement;

  // states
  const [fontWeight, setFontWeight] = useState(element ? Number(window.getComputedStyle(element).fontWeight) : 400); // font weight / bold 
  const [fontSize, setFontSize] = useState(element ? parseFloat(window.getComputedStyle(element).fontSize) : Number(12));  // font size 
  const [italics, toggleItalics] = useState(false);
  const [underline, toggleUnderline] = useState(false);
  const [alignment, setAlignmentState] = useState(element ? (window.getComputedStyle(element).textAlign) : 'left'); // text alignment 
  

  // apply style to specific highlighted chars
  const applyStyleToSelection = (property: string, value: string) => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            if (element) {
                element.style.setProperty(property, value);
            }
            return;
        }

        const range = selection.getRangeAt(0);
        
        if (range.collapsed) {
            if (element) {
                element.style.setProperty(property, value);
            }
            return;
        }

        const span = document.createElement('span');
        console.log(span);
        span.style.setProperty(property, value);
        
        try {
            const contents = range.extractContents();
            span.appendChild(contents);
            range.insertNode(span);
            
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            selection.removeAllRanges();
            selection.addRange(newRange);
            
            savedSelectionRef.current = newRange;
        } catch (e) {
            console.error('Error applying style to selection:', e);
        }
    };

  function applyFontFamily(fontFamily: string){
    applyStyleToSelection('font-family', fontFamily);
  }

  function getCurrentFont(): string {
    if (!element) return 'Arial';
    const computed = window.getComputedStyle(element);
    return computed.fontFamily.split(',')[0].replace(/['"]/g, '') || 'Arial';
  }


  const changeFontWeight = (e : React.KeyboardEvent<HTMLInputElement>) => {
    //get current fontweight, if null, set to default fontWeight (400)
    
    if (e.key == "Enter") {
      if (fontWeight >= 100 && fontWeight <=900) {
        if (!element) return;
        else {
          element.style.setProperty('font-weight', fontWeight + "");
        }
      }
    }
  }
  
  function incrementFontWeight(type : String) {
    const incAmt = (type == "dec") ? -100 : 100;
    const newFontWeight = fontWeight + incAmt; //local scope, if out of range of conditional, will not affect fontWeight
    if (newFontWeight >= 100 && newFontWeight <= 900) {
      setFontWeight(newFontWeight);
      applyStyleToSelection('font-weight', newFontWeight.toString());
    }
  }

  function toggleBold() {
    const isBold = fontWeight >= 700;
    setFontWeight(isBold ? 400 : 700)
    applyStyleToSelection('font-weight', isBold ? '400' : '700');
  }

  function toggleItalic() {
    const nextState = !italics;
    toggleItalics(nextState);
    applyStyleToSelection('font-style', nextState ? 'italic' : 'normal');
  }

  function toggleUnderlined() {
    const nextState = !underline;
    toggleUnderline(nextState);
    applyStyleToSelection('text-decoration-line', nextState ? 'underline' : 'none');
  }

  // using buttons to increment/decrement 
  function incrementFont(type : String) {
    const amount = (type == 'dec') ? -0.1 : 0.1;
    const newFont = Number((fontSize + amount).toFixed(1));
    if (newFont >= 1 && newFont <= 100) {
      setFontSize(newFont);
      applyStyleToSelection('font-size', newFont.toString() + 'px');
    }
  }

  // when font size changes (ex. user changes)
  const changeFont = (e : React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key == "Enter") {
        if (fontSize >= 1 && fontSize <= 100) {
          setFontSize(fontSize);
          applyStyleToSelection('font-size', fontSize + 'px');
        }
      }
    };
    

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (!element) return;
    const computed = window.getComputedStyle(element);
    const currentAlign = computed.textAlign || 'left';
    setAlignmentState(currentAlign);
  }, [element]);

  function setAlignment(alignment: string){
    if (!element) return;
    
    const computed = window.getComputedStyle(element);
    const display = computed.display;
    
    if (display === 'inline' || display === 'inline-flex' || display === 'inline-block') {
      const parent = element.parentElement;
      
      let wrapper = parent?.hasAttribute('data-alignment-wrapper') ? parent : null;
      
      if (!wrapper && parent) {
        wrapper = document.createElement('div');
        wrapper.setAttribute('data-alignment-wrapper', 'true');
        wrapper.style.display = 'inline-block';
        wrapper.style.width = '100%';
        
        parent.insertBefore(wrapper, element);
        wrapper.appendChild(element);
      }
      
      if (wrapper) {
        wrapper.style.textAlign = alignment;
      }
    } else {
      element.style.textAlign = alignment;
    }
    
    setAlignmentState(alignment);
  }

  return (
    <div ref={popupRef} id="text-setting-popup-ui-component" className="text-setting-popup-ui-component" style={{ position: 'absolute', top: position?.y ?? 100, left: position?.x ?? 100 }}>
        <div>
            <h2>Text Settings</h2>
            <hr></hr>
        </div>
        <div className='text-setting-popup-ui-component-section'>
            <div>
              Style 
              <select
                value={getCurrentFont()}
                onChange={(e) => applyFontFamily(e.target.value)}
                className="font-selector"
              >
                {Object.values(FontEnum).map((font) => (
                  <option key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </option>
                ))}
              </select>
            </div>
            <hr></hr>
            <div>
              Font
            </div>
            <hr></hr>
            <div style={{display: 'flex'}}>
              <button onClick={() => incrementFont('dec')}>-</button>
              <input type="number" value={fontSize} min="1" max="100" step="0.1" onChange={(e) => setFontSize(Number(e.target.value))} onKeyDown={(e) => changeFont(e)} style={{display: 'flex', textAlign: 'center'}}/>
              <button onClick={() => incrementFont('inc')}>+</button>
            </div>
            <hr></hr>
            <div>
              <ul>
                <li>
                  <button onClick={toggleBold}>B</button>

                  <div>
                    <button onClick={() => incrementFontWeight('dec')}>-</button>
                    <input 
                      type="number" value={fontWeight} min="100" max="900" step="100" style={{width: "40px", textAlign: "center"}}
                      onChange={(e) => setFontWeight(Number(e.target.value))}
                      onKeyDown={(e) => changeFontWeight(e)}
                      />
                    <button onClick={() => incrementFontWeight('inc')}>+</button>
                  </div>
                </li>
                <li>
                  <button onClick={toggleItalic}>I</button>
                </li>
                <li>
                  <button onClick={toggleUnderlined}>U</button>
                </li>
              </ul>
            </div>
            <hr></hr>
            <div>
            Alignment
              <select value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
        </div>
      </div>
  );
}

export default TextSettingPopupUIComponent;
