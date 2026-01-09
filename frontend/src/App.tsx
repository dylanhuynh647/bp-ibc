import './App.css'
import UIContextProvider from './context/UIContext'
import SaveButton from './components/save/SaveButton'
import useLocalAutoSave from './components/save/useLocalAutoSave'
import LoadFromLocalAutoSave from './components/save/LoadFromLocalAutoSave'

function App() {
  useLocalAutoSave();

  return (
    <>
      <UIContextProvider>
        <LoadFromLocalAutoSave/>
      </UIContextProvider>

      <br/>
      <br/>

      <SaveButton/>
    </>
  );
}

export default App