import React, { useContext } from 'react';

import MainScreen from './components/Screens/MainScreen/MainScreen';
import NoteScreen from './components/Screens/NoteScreen/NoteScreen';
import NotesProvider from './providers/NotesProvider';
import { ScreenContext } from './providers/ScreenProvider';
import classes from './App.module.css';

export default function App() {
  const { noteScreen } = useContext(ScreenContext);

  let currentScreen = <MainScreen />

  if (noteScreen)
    currentScreen = <NoteScreen />

  return (
    <div className={classes.App}>
      <NotesProvider>
        <header></header>
        <body>{currentScreen}</body>
      </NotesProvider>
    </div>
  )
}