import React, { useEffect, useState } from 'react';

export default function NoteScreen(props){
    const [saveButton, setSaveButton] = useState(false);
    const [noteContent, setNoteContent] = useState('');

    useEffect(() => {
        props.notes.map(note => {
            if(note.editting)
                setNoteContent(note.content);
        })
    }, [])

    function inputTextHandler(content){
        setNoteContent(content.target.value);

        if(content.target.value === '')
            setSaveButton(false);
        else
            if(!saveButton)
                setSaveButton(true);
    }

    function saveNoteHandler(){
        props.addNoteHandler(noteContent);
        props.createNoteHandler();
    }

    let showButton = null;

    if(saveButton)
        showButton = <button onClick={saveNoteHandler}>Save note</button>;

    return(
    <>
        <input type="text" value={noteContent} onChange={inputTextHandler}/>
        {showButton}
        <button onClick={props.createNoteHandler}>Cancel note</button>
    </>
    );
}