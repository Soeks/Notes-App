import React, { useEffect, useState, useContext } from 'react';

import CustomButton from '../../CustomButton/CustomButton';
import classes from './NoteScreen.module.css';
import { NotesContext } from '../../../providers/NotesProvider';

export default function NoteScreen() {
    const { notes, screenChangeHandler, createNoteHandler } = useContext(NotesContext);
    const [noteText, setNoteText] = useState('');
    const [saveButton, setSaveButton] = useState(false);

    useEffect(() => {
        notes.map(note => {
            if (note.editting)
                setNoteText(note.text);
        })
    }, [])

    function noteTextHandler(content) {
        setNoteText(content.target.value);

        if (content.target.value === '')
            setSaveButton(false);
        else
            if (!saveButton)
                setSaveButton(true);
    }

    let showSaveButton = null;

    if (saveButton)
        showSaveButton = <CustomButton onClick={() => createNoteHandler(noteText)} text='✓' />

    return (
        <div className={classes.NoteScreen}>
            <input type="text" value={noteText} onChange={noteTextHandler} />
            <div className={classes.ButtonsContainer}>
                {showSaveButton}
                <CustomButton onClick={screenChangeHandler} text='✕' />
            </div>
        </div>
    );
}