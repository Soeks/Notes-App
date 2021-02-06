import React from 'react';

import Note from '../../Note/Note';
import CreateNoteButton from '../../CustomButton/CustomButton';
import classes from './MainScreen.module.css';

export default function MainScreen(props) {
    const notes = props.notes;

    return (
        <div className={classes.MainScreen}>
            <ul className={classes.List}>
                {notes.map(note => {
                    let index = notes.indexOf(note);

                    return (
                        <li key={index}>
                            <Note content={note.content}
                                deleteNoteHandler={() => props.deleteNoteHandler(index)}
                                noteSettingsHandler={props.noteSettingsHandler}
                                index={index}
                                settings={note.settings}
                                editNoteHandler={props.editNoteHandler}/>
                        </li>
                    )
                })}
            </ul>
            <CreateNoteButton onClick={props.createNoteHandler} text='+'/>
        </div>
    );
}