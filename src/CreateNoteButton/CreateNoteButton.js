import React from 'react';

import classes from './CreateNoteButton.module.css';

export default function CreateNoteButton(props) {
    return <button className={classes.Button} onClick={props.createNoteHandler}>Create note</button>;
}