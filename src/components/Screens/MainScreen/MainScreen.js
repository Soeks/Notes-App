import React, { useContext, useEffect, useState } from 'react';

import Note from '../../Note/Note';
import CustomButton from '../../CustomButton/CustomButton';
import { NotesContext } from '../../../providers/NotesProvider';
import classes from './MainScreen.module.css';
//test
export default function MainScreen() {
    const { notes } = useContext(NotesContext);
    const { screenChangeHandler } = useContext(NotesContext);

    let showList = <p className={classes.Text}>Você não tem nenhuma nota!</p>

    if(notes.length > 0)
        showList = (
            <>
                <ul className={classes.List}>
                    {notes.map((_, id) => <Note key={id} index={id}/>)}
                </ul>
            </>  
    )

    return (
        <div className={classes.MainScreen}>
            {showList}
            <CustomButton onClick={screenChangeHandler} text='Create Note' />
        </div>
    )
}