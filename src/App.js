import React, { useContext } from 'react';

import MainScreen from './components/Screens/MainScreen';
import NoteScreen from './components/Screens/NoteScreen';
import NotesProvider from './providers/NotesProvider';
import { ScreenContext } from './providers/ScreenProvider';

import { AppStyle } from './styles';

export default function App() {
  const { noteScreen } = useContext(ScreenContext);

  return (
    <AppStyle>
      <NotesProvider>
        <header>
          <h1>Notes App</h1>
        </header>
        {noteScreen ? <NoteScreen /> : <MainScreen />}
      </NotesProvider>
    </AppStyle>
  );
}
