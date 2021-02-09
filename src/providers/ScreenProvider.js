import React, { useState, createContext, useEffect } from 'react';

export const ScreenContext = createContext();

export default function ScreenProvider(props) {
    const [noteScreen, setNoteScreen] = useState(false);

    return (
        <ScreenContext.Provider value={{ noteScreen, setNoteScreen }}>
            {props.children}
        </ScreenContext.Provider>
    )
}