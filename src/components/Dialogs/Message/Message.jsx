import React from 'react';
import s from './../Message/Message.module.css'



const Message = (props) => {
    return (
        <li className={s.itemList}>
            <img src={"http://themekit.frontendmatter.com/dist/themes/admin/images/people/110/" + props.avamessage}/>
            <div className={s.messages} >{props.message}</div>
        </li>
    );
}

export default Message;