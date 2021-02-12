import React, { useEffect, useState, useContext } from 'react';

import CustomButton from '../CustomButton';
import { NotesContext } from '../../providers/NotesProvider';

import { NoteScreenStyle } from '../../styles';

export default function NoteScreen() {
  const { notes, cancelNoteHandler, createNoteHandler } = useContext(
    NotesContext
  );
  const [noteText, setNoteText] = useState('');
  const [saveButton, setSaveButton] = useState(false);

  useEffect(() => {
    if (notes.length > 0)
      notes.map((note) => {
        if (note.editting) setNoteText(note.text);
      });
  }, []);

  function noteTextHandler(content) {
    setNoteText(content.target.value);

    if (content.target.value === '') setSaveButton(false);
    else if (!saveButton) setSaveButton(true);
  }

  return (
    <NoteScreenStyle>
      <textarea value={noteText} onChange={noteTextHandler} />
      <div>
        {saveButton ? (
          <CustomButton
            onClick={() => createNoteHandler(noteText)}
            text='Save Note'
          />
        ) : null}
        <CustomButton onClick={cancelNoteHandler} text='Cancel Note' />
      </div>
    </NoteScreenStyle>
  );
}
