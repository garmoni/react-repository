import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement =
        props.myPostData.map(p => <Post message={p.message} likenum={p.likenum} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postWrapper}>
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