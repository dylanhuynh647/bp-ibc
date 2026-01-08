import { useEffect } from 'react'

// Value represented in seconds
const autoSaveInterval = 10;    // e,g. 10 = call the local auto save every 30s

function LocalAutoSave(){
  useEffect(() => {
    const localAutoSave = (() => {
      let pageContent : string = "";

      // Gathers all the data-editable elements on the page
      const editableElements = document.body.querySelectorAll('[data-editable]');
      for (const editableElement of editableElements){
        pageContent += editableElement.outerHTML;
      }

      // Check if localstorage is full before setting it
      try {
        localStorage.setItem("Local Autosave Page Content", pageContent);
      }
      catch (error : unknown){
        if (error instanceof Error && error.name === "QuotaExceededError"){
          console.error("Local storage exceeded!");
        }
      }
    })

    const localAutoSaveCall = setInterval(localAutoSave, autoSaveInterval * 1000);

    return () => {
      clearInterval(localAutoSaveCall);
    }
  }, [])
}

export default LocalAutoSave;