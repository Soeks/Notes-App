import React, { useContext } from 'react';

import Note from '../../Note/Note';
import CustomButton from '../../CustomButton/CustomButton';
import { NotesContext } from '../../../providers/NotesProvider';
import classes from './MainScreen.module.css';

export default function MainScreen() {
    const { notes } = useContext(NotesContext);
    const { screenChangeHandler } = useContext(NotesContext);

    return (
        <div className={classes.MainScreen}>
            <ul className={classes.List}>
                {notes.map((_, id) => <Note key={id} index={id}/>)}
            </ul>
            <CustomButton onClick={screenChangeHandler} text='+' />
        </div>
    );
}