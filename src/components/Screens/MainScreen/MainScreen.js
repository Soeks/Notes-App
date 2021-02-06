import React from 'react';

import Note from '../../Note/Note';
import CreateNoteButton from '../../CreateNoteButton/CreateNoteButton';
import classes from './MainScreen.module.css';

export default function MainScreen(props) {
    const notes = props.notes;

    return (
        <div className={classes.MainScreen}>
            <CreateNoteButton createNoteHandler={props.createNoteHandler}/>
            <ul>
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
        </div>
    );
}