import React from 'react';
import classesApp from './../../../App.module.css';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement =
        props.myPostData.map(p => <Post message={p.message} likenum={p.likenum} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
        <h3>My posts</h3>
            <div className={s.formPost}>
               <textarea ref={newPostElement}></textarea>
               <button onClick={ addPost }> New post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>);
}

export default MyPosts;