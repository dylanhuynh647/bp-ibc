import { useEffect } from 'react'

// Value represented in seconds
const autoSaveInterval = 10;    // e,g. 10 = call the local auto save every 30s

function LocalAutoSave(){
  useEffect(() => {
    const localAutoSave = (() => {
      let sectionNumber : number = 1; // All stored elements have a uniquely numbered key where its contents are stored.
    
      // Gets an array of all elements on page with the 'data-editable' attribute.
      const editableElements = document.body.querySelectorAll('[data-editable]');

      // Checks if local storage is full before setting an element.
      try {
        for (const editableElement of editableElements){
          localStorage.setItem("Saved Element #" + sectionNumber, editableElement.outerHTML);
          sectionNumber++;
        }
      }
      catch (error : unknown){
        if (error instanceof Error && error.name === "QuotaExceededError"){
          console.error("Local storage exceeded!");
        }
      }

      sectionNumber = 1;
    })


    const localAutoSaveCall = setInterval(localAutoSave, autoSaveInterval * 1000);

    return () => {
      clearInterval(localAutoSaveCall);
    }
  }, [])
}

export default LocalAutoSave;