import React, { useEffect, useState } from 'react';

import MainScreen from './Screens/MainScreen/MainScreen';
import NoteScreen from './Screens/NoteScreen/NoteScreen';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [creatingNote, setCreatingNote] = useState(false);

  function createNoteHandler(){
    notes.map(note => {
      if(note.settings == true)
        note.settings = false;
    });

    setCreatingNote(!creatingNote);
  }

  function addNoteHandler(content){
    if(typeof(content) !== 'string') return;

    let editting = false;

    notes.map(note => {
      if(note.editting)
        editting = true;
    });

    if(editting){
      let newNotes = [];

      for(var i = 0; i < notes.length; i++){
        let note = {
          content: notes[i].content,
          settings: false,
          editting: false
        }

        if(notes[i].editting)
          note.content = content;

        newNotes.push(note);
      }

      setNotes(newNotes);
    }else{
      const note = {
        content: content,
        settings: false,
        editting: false
      }

      setNotes([...notes, note]);
    }
  }

  function deleteNoteHandler(index){
    let newNotes = [...notes];

    newNotes.splice(index, 1);

    setNotes(newNotes);
  }

  function noteSettingsHandler(index){
    let newNotes = [];

    for(var i = 0; i < notes.length; i++){
      let note = {
        content: notes[i].content,
        settings: false,
        editting: false
      }

      if(i == index)
        note.settings = !notes[i].settings;

      newNotes.push(note);
    }

    setNotes(newNotes);
  }

  function editNoteHandler(index){
    let newNotes = [];

    for(var i = 0; i < notes.length; i++){
      let note = {
        content: notes[i].content,
        settings: false,
        editting: false
      }

      if(i == index)
        note.editting = true;

      newNotes.push(note);
    }

    setNotes(newNotes);
    createNoteHandler();
  }

  let currentScreen = <MainScreen
    createNoteHandler={createNoteHandler}
    notes={notes}
    noteSettingsHandler={noteSettingsHandler}
    deleteNoteHandler={deleteNoteHandler}
    editNoteHandler={editNoteHandler}/>;

  if(creatingNote)
    currentScreen = <NoteScreen
      createNoteHandler={createNoteHandler}
      addNoteHandler={addNoteHandler}
      notes={notes}/>

  return (
    <>
      {currentScreen}
    </>
  );
}