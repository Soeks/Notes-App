import React, { useState } from 'react';

import MainScreen from './components/Screens/MainScreen/MainScreen';
import NoteScreen from './components/Screens/NoteScreen/NoteScreen';
import classes from './App.module.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [creatingNote, setCreatingNote] = useState(false);

  function createNoteHandler(){
    if(creatingNote)
      notes.map(note => {
        if(note.settings == true)
          note.settings = false;
      });

    let nextStatus = !creatingNote;

    setCreatingNote(nextStatus);
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
        const note = createNote(notes[i].content);

        if(notes[i].editting)
          note.content = content;

        newNotes.push(note);
      }

      setNotes(newNotes);
    }else{
      const note = createNote(content);

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
      const note = createNote(notes[i].content);

      if(i == index)
        note.settings = !notes[i].settings;

      newNotes.push(note);
    }

    setNotes(newNotes);
  }

  function editNoteHandler(index){
    let newNotes = [];

    for(var i = 0; i < notes.length; i++){
      const note = createNote(notes[i].content);

      if(i == index)
        note.editting = true;

      newNotes.push(note);
    }

    setNotes(newNotes);
    createNoteHandler();
  }

  function createNote(content = '', settings = false, editting = false){
    const note = {
      content: content,
      settings: settings,
      editting: editting
    }

    return note;
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
      <div className={classes.App}>{currentScreen}</div>
    </>
  );
}