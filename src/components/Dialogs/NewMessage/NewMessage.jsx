import React from 'react';
import classesApp from './../../../App.module.css';
import  s from './NewMessage.module.css';

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        newMessageElement.current.value='';
    }
    let onMessageChange = () => {

    }

    return (
        <div className={s.postWrapper}>
            <h3>New message</h3>
            <div className={s.formMessage}>
               <textarea onChange={onMessageChange} ref={newMessageElement}
                         value={props.newMessageText}/>
                <button onClick={addMessage} >Add message</button>
            </div>
        </div>);
}

export default NewMessage;