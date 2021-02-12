import React, { useEffect, useState, useContext } from 'react';

import CustomButton from './CustomButton';
import { NotesContext } from '../providers/NotesProvider';

import { NoteCreationStyle } from '../styles';

export default function NoteCreation() {
  const { notes, setNotes } = useContext(NotesContext);
  const [noteText, setNoteText] = useState('');
  const [creatingNote, setCreatingNote] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  useEffect(() => {
    if (!creatingNote) return;

    if (notes.length > 0)
      notes.map((note) => {
        if (note.editting) setNoteText(note.text);
      });
  }, [notes]);

  function noteTextHandler(content) {
    setNoteText(content.target.value);

    if (content.target.value === '') setSaveButton(false);
    else if (!saveButton) setSaveButton(true);
  }

  function createNoteHandler(value) {
    if (!value) {
      setNoteText('');
    }

    setCreatingNote(value);
  }

  function saveNoteHandler(text) {
    if (text === '') return;

    const newNotes = [...notes];
    let editCheck = false;

    newNotes.map(function (note) {
      if (note.editting) {
        note.text = text;
        note.editting = false;
        editCheck = true;
      }
    });

    if (!editCheck) newNotes.push(createNote(text));

    setNoteText('');
    setCreatingNote(false);

    setNotes(newNotes);
  }

  function createNote(text = '', settings = false, editting = false) {
    const note = {
      text: text,
      settings: settings,
      editting: editting,
    };

    return note;
  }

  return (
    <NoteCreationStyle>
      {creatingNote ? (
        <>
          <textarea value={noteText} onChange={noteTextHandler} />
          <div>
            {saveButton ? (
              <CustomButton
                onClick={() => saveNoteHandler(noteText)}
                text='Save Note'
              />
            ) : null}
            <CustomButton
              onClick={() => createNoteHandler(false)}
              text='Cancel Note'
            />
          </div>
        </>
      ) : (
        <CustomButton
          onClick={() => createNoteHandler(true)}
          text='Create Note'
        />
      )}
    </NoteCreationStyle>
  );
}
