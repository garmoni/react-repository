import React from 'react';
import s from './../Dialogs.module.css'



const Message = (props) => {
    return (
        <li>{props.message}</li>
    );
}

export default Message;