import React, { useState } from 'react';

import MainScreen from './Screens/MainScreen/MainScreen';
import NoteScreen from './Screens/NoteScreen/NoteScreen';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [creatingNote, setCreatingNote] = useState(false);

  function createNoteHandler(){
    setCreatingNote(!creatingNote);
  }

  function addNoteHandler(content){
    if(typeof(content) !== 'string') return;

    setNotes([...notes, content]);
  }

  function removeNoteHandler(index){
    let newNotes = [...notes];

    newNotes.splice(index, 1);

    setNotes(newNotes);
  }

  let currentScreen = <MainScreen
    createNoteHandler={createNoteHandler}
    notes={notes}
    removeNoteHandler={removeNoteHandler}/>;

  if(creatingNote)
    currentScreen = <NoteScreen
      createNoteHandler={createNoteHandler}
      addNoteHandler={addNoteHandler}/>

  return (
    <>
      {currentScreen}
    </>
  );
}