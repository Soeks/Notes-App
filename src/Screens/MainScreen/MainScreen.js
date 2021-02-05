import React from 'react';

import Note from '../../Note/Note';

export default function MainScreen(props) {
    const notes = props.notes;

    return (
        <>
            <button onClick={props.createNoteHandler}>Create note</button>
            <ul>
                {notes.map(note => {
                    let index = notes.indexOf(note);

                    return (
                        <li key={index}>
                            <Note
                                content={note}
                                removeNoteHandler={() => props.removeNoteHandler(index)}
                                notes={notes}/>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}