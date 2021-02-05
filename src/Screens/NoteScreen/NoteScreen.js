import React from 'react';

export default function NoteScreen(props){
    return(
    <>
        <p>Creating Note Screen</p>
        <button onClick={props.createNoteHandler}>Cancel note</button>
    </>
    );
}