import React, { useContext } from 'react';

import { NotesContext } from '../../providers/NotesProvider';

import classes from './Note.module.css';

export default function Note({ index }) {
    const { notes, noteSettingsHandler, editNoteHandler, deleteNoteHandler } = useContext(NotesContext);

    let note = (
        <li className={classes.NoteContainer}>
            <p onClick={() => noteSettingsHandler(index)} className={classes.Text}>{notes[index].text}</p>
        </li>
    )

    if (notes[index].settings)
        note = (
            <li className={classes.NoteContainer}>
                <p onClick={() => noteSettingsHandler(index)} className={[classes.Text, classes.Selection].join(' ')}>{notes[index].text}</p>
                <div className={classes.ButtonContainer}>
                    <button className={[classes.Button, classes.Pencil].join(' ')} onClick={() => editNoteHandler(index)}>✎</button>
                    <button className={[classes.Button, classes.Thrash].join(' ')} onClick={() => deleteNoteHandler(index)}>🗑</button>
                </div>
            </li>
        )

    return (
        <>
            {note}
        </>
    );
}