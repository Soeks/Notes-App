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
  const {
    notes,
    noteSettingsHandler,
    editNoteHandler,
    deleteNoteHandler,
  } = useContext(NotesContext);

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
