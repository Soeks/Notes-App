import React, { useContext } from 'react';

import Note from '../Note';
import CustomButton from '../CustomButton';
import { NotesContext } from '../../providers/NotesProvider';

import { MainScreenStyle } from '../../styles';

export default function MainScreen() {
  const { notes } = useContext(NotesContext);
  const { screenChangeHandler } = useContext(NotesContext);

  return (
    <MainScreenStyle>
      {notes.length > 0 ? (
        <ul>
          {notes.map((_, id) => (
            <Note key={id} index={id} />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhuma nota!</p>
      )}
      <CustomButton onClick={screenChangeHandler} text='Create Note' />
    </MainScreenStyle>
  );
}
