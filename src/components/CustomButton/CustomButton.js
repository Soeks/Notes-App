import React from 'react';

import classes from './CustomButton.module.css';

export default function CreateNoteButton(props) {
    return <button className={classes.Button} onClick={props.onClick}>{props.text}</button>;
}