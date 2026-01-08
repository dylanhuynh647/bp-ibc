import './App.css'
import UIContextProvider from './context/UIContext'
import SaveButton from './components/save/SaveButton'
import useLocalAutoSave from './components/save/useLocalAutoSave'

function App() {
  const showDefaultTemplate : boolean = false; // Debugging purposes

  useLocalAutoSave();

  var pageContent : any = "";

  if (localStorage.getItem("Local Autosave Page Content") === null || showDefaultTemplate){
    pageContent = (
      <>
        <span data-editable='true'>Click me! then double-click me!</span>
        <br></br>
        <p data-editable='true'>hello</p>
      </>
    )
  }
  else {
    pageContent = <div dangerouslySetInnerHTML={{__html: localStorage.getItem("Local Autosave Page Content") as string}} />
  }

  return (
    <>
      <UIContextProvider>
        {pageContent}
      </UIContextProvider>

      <br/>
      <br/>

      <SaveButton/>
    </>
  );
}

export default App