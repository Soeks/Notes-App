import React, { useContext } from 'react';

import { NotesContext } from '../providers/NotesProvider';

import { BlockScreenStyle } from '../styles';

export default function BlockScreen() {
  const { creatingNote } = useContext(NotesContext);

  return <BlockScreenStyle creatingNote={creatingNote}></BlockScreenStyle>;
}
