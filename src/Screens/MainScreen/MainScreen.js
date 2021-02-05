import React from 'react';

import Note from '../../Note/Note';

export default function MainScreen(props) {
    const notes = props.notes;

    return (
        <>
            <button onClick={props.createNoteHandler}>Create note</button>
            <ul>
                {notes.map((note) => {
                    return <li key={notes.indexOf(note)}><Note content={note}/></li>
                })}
            </ul>
        </>
    );
}