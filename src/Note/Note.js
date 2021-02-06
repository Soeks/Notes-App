import React, { useState, useEffect } from 'react';

export default function Note(props) {
    let settingButtons = null;

    if(props.settings)
        settingButtons = (
            <>
                <button onClick={() => props.editNoteHandler(props.index)}>Edit Note</button>
                <button onClick={props.deleteNoteHandler}>Delete Note</button>
            </>
        );

    return (
        <>
            <p onClick={() => props.noteSettingsHandler(props.index)}>{props.content}</p>
            {settingButtons}
        </>
    );
}