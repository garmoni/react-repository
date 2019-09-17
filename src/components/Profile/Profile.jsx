import React from 'react';
import  classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts myPostData={props.state.myPostData} />
    </div>
}

export default Profile;