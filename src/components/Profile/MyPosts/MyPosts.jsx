import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement =
        props.myPostData.map(p => <Post message={p.message} likenum={p.likenum} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postWrapper}>
        <h3>My posts</h3>
            <div className={s.formPost}>
               <textarea onChange={onPostChange} ref={newPostElement}
                         value={props.newPostText}/>
                <button onClick={ addPost }> New post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>);
}

export default MyPosts;