import React, { useContext } from 'react';

import { NotesContext } from '../providers/NotesProvider';

import {
  NoteStyle,
  NoteText,
  NoteTextSelected,
  NoteEditButton,
  NoteDeleteButton,
} from '../styles';

export default function Note({ index }) {
  const { notes, setNotes } = useContext(NotesContext);

  function noteSettingsHandler(index) {
    const newNotes = [...notes];

    for (let i = 0; i < newNotes.length; i++) {
      if (i == index) newNotes[i].settings = !newNotes[i].settings;
      else newNotes[i].settings = false;
    }

    setNotes(newNotes);
  }

  function deleteNoteHandler(index) {
    const newNotes = [...notes];

    newNotes.splice(index, 1);

    setNotes(newNotes);
  }

  function editNoteHandler(index) {
    const newNotes = [...notes];

    for (let i = 0; i < newNotes.length; i++) {
      if (i == index) newNotes[i].editting = !newNotes[i].editting;
      else newNotes[i].editting = false;
    }

    setNotes(newNotes);
  }

  return (
    <NoteStyle>
      {notes[index].settings ? (
        <>
          <NoteTextSelected onClick={() => noteSettingsHandler(index)}>
            {notes[index].text}
          </NoteTextSelected>
          <div>
            <NoteEditButton onClick={() => editNoteHandler(index)}>
              Edit
            </NoteEditButton>
            <NoteDeleteButton onClick={() => deleteNoteHandler(index)}>
              Delete
            </NoteDeleteButton>
          </div>
        </>
      ) : (
        <NoteText onClick={() => noteSettingsHandler(index)}>
          {notes[index].text}
        </NoteText>
      )}
    </NoteStyle>
  );
}
