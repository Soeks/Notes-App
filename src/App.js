import React from 'react';

import NoteList from './components/NoteList';
import NoteCreation from './components/NoteCreation';
import NotesProvider from './providers/NotesProvider';
import BlockScreen from './components/BlockScreen';

import { AppStyle } from './styles';

export default function App() {
  return (
    <AppStyle>
      <NotesProvider>
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <NoteCreation />
          <BlockScreen />
          <NoteList />
        </main>
      </NotesProvider>
    </AppStyle>
  );
}
