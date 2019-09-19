import React from 'react';
import classesApp from './../../../App.module.css';
import  s from './NewMessage.module.css';

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={classesApp.postWrapper}>
            <h3>New message</h3>
            <div className={s.formMessage}>
               <textarea ref={newMessageElement}></textarea>
                <button onClick={ addPost }>Add message</button>
            </div>
        </div>);
}

export default NewMessage;