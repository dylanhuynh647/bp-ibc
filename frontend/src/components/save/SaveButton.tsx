function SaveButton(){
  const dummyFunc = () => {
    console.log("Save button clicked.");
  }

  return <button onClick={dummyFunc}>Save</button>;
}

export default SaveButton;

// Replaced dummyFunc with save function when it's actually implemented