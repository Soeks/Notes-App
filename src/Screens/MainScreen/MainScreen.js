import React from 'react';

import Note from '../../Note/Note';

export default function MainScreen(props){
    const notes = props.notes;

    console.log(notes);

    return(
    <>
        <button onClick={props.createNote}>Create note</button>
        <ul>Note List
            <li>Note 1</li>
            <li>Note 2</li>
            <li>Note 3</li>
        </ul>
    </>
    );
}