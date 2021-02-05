import React, { useState, useEffect } from 'react';

export default function Note(props) {
    const [noteSettings, setNoteSettings] = useState(false);

    useEffect(() => {
        setNoteSettings(false);
    }, [props.notes])

    function openSettingsHandler(){
        setNoteSettings(!noteSettings);
    }

    let settingsButton = null;

    if(noteSettings)
        settingsButton = (
            <>
                <button>Edit Note</button>
                <button onClick={props.removeNoteHandler}>Delete Note</button>
            </>
        );

    return (
        <>
            <p onClick={openSettingsHandler}>{props.content}</p>
            {settingsButton}
        </>
    );
}