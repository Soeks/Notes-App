import React, { useState, createContext, useContext } from 'react';

import { ScreenContext } from './ScreenProvider';

export const NotesContext = createContext();

export default function NotesProvider(props) {
    const { noteScreen, setNoteScreen } = useContext(ScreenContext);
    const [notes, setNotes] = useState([]);

    function screenChangeHandler() {
        notes.map(note => {
            if (note.settings)
                note.settings = false;
        });

        setNoteScreen(!noteScreen);
    }

    function createNoteHandler(text) {
        const newNotes = [...notes];
        
        let editCheck = false;

        newNotes.map(note => {
            if (note.editting) {
                note.text = text;
                note.editting = false;
                editCheck = true;
            }
        });

        if (editCheck)
            setNotes(newNotes);
        else
            setNotes([...notes, createNote(text)]);

        screenChangeHandler();
    }

    function noteSettingsHandler(index) {
        const newNotes = [...notes];

        for (var i = 0; i < newNotes.length; i++) {
            if (i == index)
                newNotes[i].settings = !newNotes[i].settings;
            else
                newNotes[i].settings = false;
        }

        setNotes(newNotes);
    }

    function editNoteHandler(index) {
        const newNotes = [...notes];

        newNotes[index].editting = true;

        setNotes(newNotes);
        screenChangeHandler();
    }

    function deleteNoteHandler(index) {
        const newNotes = [...notes];

        newNotes.splice(index, 1);

        setNotes(newNotes);
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
            notes, setNotes, screenChangeHandler, createNoteHandler, noteSettingsHandler, editNoteHandler, deleteNoteHandler
        }}>
            {props.children}
        </NotesContext.Provider>
    );
}