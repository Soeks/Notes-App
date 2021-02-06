import React, { useEffect, useState } from 'react';

import CustomButton from '../../CustomButton/CustomButton';
import classes from './NoteScreen.module.css';

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

    let showSaveButton = null;

    if(saveButton)
        showSaveButton = <CustomButton onClick={saveNoteHandler} text='✓'/>

    return(
    <div className={classes.NoteScreen}>
        <input type="text" value={noteContent} onChange={inputTextHandler}/>
        <div className={classes.ButtonsContainer}>
            {showSaveButton}
            <CustomButton onClick={props.createNoteHandler} text='✕'/>
        </div>
    </div>
    );
}