import React from 'react';
import  classesMp from './Post.module.css';
const Post = (props) => {
    return <div className={classesMp.items}>
                    <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" />
                    <p>{props.message}</p>
                    <span>like: {props.likenum}</span>
                </div>

}

export default Post;