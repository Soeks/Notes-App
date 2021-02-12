import React, { useContext } from 'react';

import { NotesContext } from '../providers/NotesProvider';

import { NoteStyle, Selection, Pencil, Thrash } from '../styles';

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
          <Selection onClick={() => noteSettingsHandler(index)}>
            {notes[index].text}
          </Selection>
          <div>
            <Pencil onClick={() => editNoteHandler(index)}>Edit</Pencil>
            <Thrash onClick={() => deleteNoteHandler(index)}>Delete</Thrash>
          </div>
        </>
      ) : (
        <p onClick={() => noteSettingsHandler(index)}>{notes[index].text}</p>
      )}
    </NoteStyle>
  );
}
