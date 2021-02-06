import React from 'react';

import classes from './CustomButton.module.css';

export default function CustomButton(props) {
    return <button className={classes.Button} onClick={props.onClick}>{props.text}</button>;
}