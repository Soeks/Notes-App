import React, { useState } from 'react';

import MainScreen from './Screen/MainScreen/MainScreen';
import CreatingNoteScreen from './Screen/NoteScreen/NoteScreen';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [creatingNote, setCreatingNote] = useState(false);

  function createNoteHandler(){
    setCreatingNote(true);
  }

  return (
    <>
      <MainScreen createNote={createNoteHandler} notes={notes}/>
    </>
  );
}