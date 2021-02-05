import React, { useState } from 'react';

export default function NoteScreen(props){
    const [note, setNote] = useState('');

    function inputTextHandler(content){
        setNote('' + content.target.value);
    }

    function saveNoteHandler(){
        props.addNoteHandler(note);
        props.createNoteHandler();
    }

    let saveButton = null;

    if(note !== '')
        saveButton = <button onClick={saveNoteHandler}>Save note</button>;

    return(
    <>
        <input type="text" onChange={inputTextHandler}/>
        {saveButton}
        <button onClick={props.createNoteHandler}>Cancel note</button>
    </>
    );
}