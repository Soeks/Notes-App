import React, { useEffect, useState, useContext } from 'react';

import { NotesContext } from '../providers/NotesProvider';

import { NoteCreationStyle, Button, CreateButton } from '../styles';

export default function NoteCreation() {
  const { notes, setNotes, creatingNote, setCreatingNote } = useContext(
    NotesContext
  );
  const [currentNote, setCurrentNote] = useState({ text: '', index: null });

  const [saveButton, setSaveButton] = useState(false);

  useEffect(
    function () {
      if (!creatingNote) return;

      if (notes.length > 0)
        notes.map((note, index) => {
          if (note.editting) setCurrentNote({ text: note.text, index: index });
        });
    },
    [creatingNote]
  );

  useEffect(
    function () {
      if (currentNote.text === '') setSaveButton(false);
      else if (
        currentNote.index !== null &&
        currentNote.text === notes[currentNote.index].text
      ) {
        setSaveButton(false);
      } else {
        if (!saveButton) setSaveButton(true);
      }
    },
    [currentNote]
  );

  function saveNoteHandler() {
    if (currentNote.index !== null) editNoteHandler();
    else addNoteHandler();
  }

  function addNoteHandler() {
    const newNotes = [...notes];

    newNotes.push({
      text: currentNote.text,
      settings: false,
      editting: false,
    });

    setCurrentNote({ text: '', index: null });
    setNotes(newNotes);
    setCreatingNote(false);
  }

  function editNoteHandler() {
    const newNotes = [...notes];

    newNotes[currentNote.index].text = currentNote.text;
    newNotes[currentNote.index].settings = false;
    newNotes[currentNote.index].editting = false;

    setCurrentNote({ text: '', index: null });
    setNotes(newNotes);
    setCreatingNote(false);
  }

  function createNoteHandler() {
    setCreatingNote(true);
  }

  function cancelNoteHandler() {
    if (currentNote.index !== null) {
      const newNotes = [...notes];

      newNotes[currentNote.index].settings = false;
      newNotes[currentNote.index].editting = false;

      setNotes(newNotes);
    }

    setCurrentNote({ text: '', index: null });
    setCreatingNote(false);
  }

  function textChangeHandler(content) {
    setCurrentNote({ text: content.target.value, index: currentNote.index });
  }

  return (
    <>
      {creatingNote ? (
        <NoteCreationStyle creatingNote={creatingNote}>
          <div>
            {currentNote.text}
            <textarea value={currentNote.text} onChange={textChangeHandler} />
          </div>
          <div>
            {saveButton ? (
              <Button onClick={saveNoteHandler}>Save Note</Button>
            ) : null}
            <Button onClick={cancelNoteHandler}>Cancel Note</Button>
          </div>
        </NoteCreationStyle>
      ) : (
        <CreateButton creatingNote={creatingNote} onClick={createNoteHandler}>
          Create Note
        </CreateButton>
      )}
    </>
  );
}
