import React, { useState } from 'react';

import MainScreen from './Screens/MainScreen/MainScreen';
import CreatingNoteScreen from './Screens/NoteScreen/NoteScreen';

export default function App() {
  const [notes, setNotes] = useState(["didi", "moco"]);
  const [creatingNote, setCreatingNote] = useState(false);

  function createNoteHandler(){
    setCreatingNote(!creatingNote);
  }

  let currentScreen = <MainScreen createNoteHandler={createNoteHandler} notes={notes}/>;

  if(creatingNote) currentScreen = <CreatingNoteScreen createNoteHandler={createNoteHandler}/>

  return (
    <>
      {currentScreen}
    </>
  );
}