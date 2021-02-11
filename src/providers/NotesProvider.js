import React, { useState, createContext, useContext, useEffect } from 'react';

import { ScreenContext } from './ScreenProvider';

export const NotesContext = createContext();

export default function NotesProvider(props) {
    const { noteScreen, setNoteScreen } = useContext(ScreenContext);
    const [notes, setNotes] = useState([]);

    useEffect(function(){
        let storagedNotes = JSON.parse(localStorage.getItem('notes'));

        if(storagedNotes === null)
            return;

        if(storagedNotes.length > 0)
            storagedNotes.map(function(note){
                note.settings = false;
                note.editting = false;
            })

        setNotes(storagedNotes);
    }, [])

    useEffect(function(){
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function screenChangeHandler() {
        setNoteScreen(!noteScreen);
    }

    function cancelNoteHandler(){
        const newNotes = [...notes];

        newNotes.map(function(note){
            note.editting = false;
        })

        localStorage.setItem('noteText', '');

        setNotes(newNotes);

        screenChangeHandler();
    }

    function createNoteHandler(text) {
        const newNotes = [...notes];
        let editCheck = false;

        newNotes.map(function(note){
            if(note.editting){
                note.text = text;
                note.editting = false;
                editCheck = true;
            }
        })

        if(!editCheck)
            newNotes.push(createNote(text));

        localStorage.setItem('noteText', '');

        setNotes(newNotes);

        screenChangeHandler();
    }

    function noteSettingsHandler(index) {
        const newNotes = [...notes];

        for (let i = 0; i < newNotes.length; i++) {
            if (i == index)
                newNotes[i].settings = !newNotes[i].settings;
            else
                newNotes[i].settings = false;
        }

        setNotes(newNotes);
    }

    function deleteNoteHandler(index) {
        const newNotes = [...notes];

        newNotes.splice(index, 1);

        setNotes(newNotes);
    }

    function editNoteHandler(index) {
        const newNotes = [...notes];

        newNotes[index].editting = true;

        setNotes(newNotes);

        screenChangeHandler();
    }

    function createNote(text = '', settings = false, editting = false) {
        const note = {
            text: text,
            settings: settings,
            editting: editting
        }

        return note;
    }

    return (
        <NotesContext.Provider value={{
            notes, setNotes, screenChangeHandler, createNoteHandler,
            noteSettingsHandler, editNoteHandler, deleteNoteHandler, cancelNoteHandler
        }}>
            {props.children}
        </NotesContext.Provider>
    )
}