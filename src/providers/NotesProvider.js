import React, { useState, createContext, useEffect } from 'react';

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const [creatingNote, setCreatingNote] = useState(false);

  useEffect(function () {
    let storagedNotes = JSON.parse(localStorage.getItem('notes'));

    if (storagedNotes === null) return;

    if (storagedNotes.length > 0)
      storagedNotes.map(function (note) {
        note.settings = false;
        note.editting = false;
      });

    setNotes(storagedNotes);
  }, []);

  useEffect(
    function () {
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    [notes]
  );

  return (
    <NotesContext.Provider
      value={{ notes, setNotes, creatingNote, setCreatingNote }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
