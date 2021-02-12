import React, { useContext } from "react";

import MainScreen from "./components/Screens/MainScreen";
import NoteScreen from "./components/Screens/NoteScreen";
import NotesProvider from "./providers/NotesProvider";
import { ScreenContext } from "./providers/ScreenProvider";

import { AppStyle, Header } from "./styles";

export default function App() {
  const { noteScreen } = useContext(ScreenContext);

  return (
    <AppStyle>
      <NotesProvider>
        <Header>
          <h1>Notes App</h1>
        </Header>
        {noteScreen ? <NoteScreen /> : <MainScreen />}
      </NotesProvider>
    </AppStyle>
  );
}
