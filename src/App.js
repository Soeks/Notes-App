import React from 'react';

import NoteList from './components/NoteList';
import NoteCreation from './components/NoteCreation';
import NotesProvider from './providers/NotesProvider';
import BlockScreen from './components/BlockScreen';

import { Header, Main } from './styles';

export default function App() {
  return (
    <NotesProvider>
      <Header>
        <h1>Notes App</h1>
      </Header>
      <Main>
        <NoteCreation />
        <BlockScreen />
        <NoteList />
      </Main>
    </NotesProvider>
  );
}
