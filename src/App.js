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

  let currentScreen = <MainScreen createNoteHandler={createNoteHandler} notes={notes}/>;

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