import React from 'react';
import  classesMp from './Post.module.css';
const Post = (props) => {
    return <div className={classesMp.items}>
                    <img src="http://avatarmaker.ru/img/11/1043/104282.png" />
                    <p>{props.message}</p>
                    <span>like: {props.likenum}</span>
                </div>
}

export default Post;