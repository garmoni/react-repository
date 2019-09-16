import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {BrowserRouter, Route} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dmitry', image: 'guy-6.jpg'},
        {id: 2, name: 'Mary', image: 'woman-5.jpg'},
        {id: 3, name: 'John', image: 'guy-4.jpg'},
        {id: 4, name: 'Ria', image: 'woman-6.jpg'},
        {id: 5, name: 'Jake', image: 'guy-3.jpg'}
    ]

    let messages = [
        {id: 1, message: "Hi Bill, Is it ok if we schedule the meeting tomorrow?"},
        {id: 2, message: "Are we still on for Today"},
        {id: 3, message: "Cool. It's settled. Tomorrow will discuss the project."},
        {id: 4, message: "I suggest a meeting on Tuesday. What do you think?"}

    ]

    let dialogsElement = dialogsData
        .map( dialog => <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
    let maessagesElement = messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.wrapper}>
            <ul className={s.name}>
                {dialogsElement}
            </ul>
            <ul className={s.messages}>
                {maessagesElement}
            </ul>
        </div>
    );
}

export default Dialogs;