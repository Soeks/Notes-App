import React from 'react';

import classes from './Note.module.css';

export default function Note(props) {
    let note = (
        <div className={classes.NoteContainer} onClick={() => props.noteSettingsHandler(props.index)}>
            <p className={classes.Text}>{props.content}</p>
        </div>
    )

    if(props.settings)
        note = (
            <div className={classes.NoteContainer} onClick={() => props.noteSettingsHandler(props.index)}>
                <p className={[classes.Text, classes.Selection].join(' ')}>{props.content}</p>
                <div className={classes.ButtonContainer}>
                    <button className={[classes.Button, classes.Pencil].join(' ')} onClick={() => props.editNoteHandler(props.index)}>✎</button>
                    <button className={[classes.Button, classes.Thrash].join(' ')} onClick={props.deleteNoteHandler}>🗑</button>
                </div>
            </div>
        )

    return (
        <>
            {note}
        </>
    );
}