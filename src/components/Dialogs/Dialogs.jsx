import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {BrowserRouter, Route} from "react-router-dom";
import NewMessage from "./NewMessage/NewMessage";
import MyPosts from "../Profile/Profile";

const Dialogs = (props) => {


    let dialogsElement =
        props.dialogsPage.dialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
    let maessagesElement =
        props.dialogsPage.messages.map (m => <Message message={m.message} avamessage={m.avamessage}/>);

    return (
        <div className={s.wrapper}>
            <ul className={s.name}>
                {dialogsElement}
            </ul>
            <div>
                <ul className={s.messages}>
                    {maessagesElement}
                </ul>
                <NewMessage />
            </div>
        </div>
    );
}

export default Dialogs;