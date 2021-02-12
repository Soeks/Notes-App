import React, { useContext } from 'react';

import Note from './Note';
import { NotesContext } from '../providers/NotesProvider';

import { NoteListStyle } from '../styles';

export default function NoteList() {
  const { notes } = useContext(NotesContext);

  return (
    <NoteListStyle>
      {notes.length > 0 ? (
        <ul>
          {notes.map((_, id) => (
            <Note key={id} index={id} />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhuma nota!</p>
      )}
    </NoteListStyle>
  );
}
