import type { JSX } from "react";

var useDefaultTemplate = false;

function LoadFromLocalAutoSave() : JSX.Element {
  if (useDefaultTemplate || localStorage.getItem("Saved Element #1") === null){
    return (
      <>
        <span data-editable='true'>Click me! then double-click me!</span>
        <br></br>
        <p data-editable='true'>hello</p>
        <br></br>
        <span data-editable='true'>good morning!</span>
      </>
    );
  }
  else {
    return (
      <>
        {Object.keys(localStorage).map((elementKey => (
          <div key={elementKey.substring(15)} dangerouslySetInnerHTML={{__html: localStorage.getItem(elementKey) as string}}/>
        )))}
      </>
    );
  }
}

export default LoadFromLocalAutoSave;