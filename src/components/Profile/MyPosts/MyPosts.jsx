import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let myPostData = [
        {id: 1, message: "Hi, how are you?", likenum: 15},
        {id: 2, message: "It's my first post", likenum: 10},
        {id: 3, message: "It's my first post", likenum: 10},
        {id: 4, message: "It's my first post", likenum: 10}
    ]

    let postsElement = myPostData.map (p => <Post message={p.message} likenum={p.likenum} />);

    return <div className={s.postWrapper}>
        <h3>My posts</h3>
            <div className={s.formPost}>
               <textarea></textarea>
                <button>New post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
}

export default MyPosts;