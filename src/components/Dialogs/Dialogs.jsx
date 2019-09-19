import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {


    let dialogsElement =
        props.state.dialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
    let maessagesElement = props.state.messages.map (m => <Message message={m.message} avamessage={m.avamessage}/>);

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