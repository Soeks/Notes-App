import React, { useState, createContext, useContext } from 'react';

import { ScreenContext } from './ScreenProvider';

export const NotesContext = createContext();

export default function NotesProvider(props) {
    const { noteScreen, setNoteScreen } = useContext(ScreenContext);
    const [notes, setNotes] = useState([]);

    function screenChangeHandler() {
        if(noteScreen)
            notes.map(note => {
                resetNoteOptions(note);
            });

        setNoteScreen(!noteScreen);
    }

    function createNoteHandler(text) {
        let editCheck = false;

        notes.map(note => {
            if (note.editting) {
                note.text = text;
                resetNoteOptions(note);
                editCheck = true;
            }
        });

        if (!editCheck)
            notes.push(createNote(text));

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
        notes[index].editting = true;

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

    function resetNoteOptions(note){
        note.settings = false;
        note.editting = false;
    }

    return (
        <NotesContext.Provider value={{
            notes, setNotes, screenChangeHandler, createNoteHandler, noteSettingsHandler, editNoteHandler, deleteNoteHandler
        }}>
            {props.children}
        </NotesContext.Provider>
    );
}