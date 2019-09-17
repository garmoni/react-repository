import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {BrowserRouter, Route} from "react-router-dom";

const Dialogs = (props) => {


    let dialogsElement =
        props.dialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
    let maessagesElement = props.messages.map (m => <Message message={m.message}/>);

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