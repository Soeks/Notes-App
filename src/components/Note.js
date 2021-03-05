import React, { useContext, useRef, useLayoutEffect } from 'react';

import { NotesContext } from '../providers/NotesProvider';

import {
  NoteText,
  NoteTextSelected,
  NoteEditButton,
  NoteDeleteButton,
} from '../styles';

export default function Note({ index }) {
  const { notes, setNotes, setCreatingNote } = useContext(NotesContext);

  const noteElement = useRef(null);

  useLayoutEffect(TextEllipsis, [notes]);

  function TextEllipsis() {
    const note = noteElement.current.children[0];

    if (note.scrollHeight <= note.offsetHeight) return;

    let count = 0;
    while (note.scrollHeight > note.offsetHeight) {
      note.innerHTML = note.innerHTML.replace(/.$/s, '');
      count++;

      if (count > 1000) {
        console.log('BROKE');
        break;
      }
    }

    note.innerHTML = note.innerHTML.replace(/.{3}$/, '...');
  }

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
    noteSettingsHandler(index);
    setCreatingNote(true);
  }

  return (
    <li ref={noteElement}>
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
    </li>
  );
}
