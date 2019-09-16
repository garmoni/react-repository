import React from 'react';
import  classesMp from './MyPosts.module.css';
const MyPosts = () => {
    return <div className={classesMp.postWrapper}>
            My posts
            <div>
                New post
            </div>
            <div className={classesMp.posts}>
                <div className={classesMp.items}>
                    <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" />
                    Post 1
                </div>
                <div className={classesMp.items}>
                    Post 2
                </div>
            </div>
        </div>
}

export default MyPosts;