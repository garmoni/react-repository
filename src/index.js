import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myPostData = [
    {id: 1, message: "Hi, how are you?", likenum: 15},
    {id: 2, message: "It's my first post", likenum: 10},
    {id: 3, message: "It's my first post", likenum: 10},
    {id: 4, message: "It's my first post", likenum: 10}
]

let dialogsData = [
    {id: 1, name: 'Dmitry', image: 'guy-6.jpg'},
    {id: 2, name: 'Mary', image: 'woman-5.jpg'},
    {id: 3, name: 'John', image: 'guy-4.jpg'},
    {id: 4, name: 'Ria', image: 'woman-6.jpg'},
    {id: 5, name: 'Jake', image: 'guy-3.jpg'}
]

let messages = [
    {id: 1, message: "Hi Bill, Is it ok if we schedule the meeting tomorrow?"},
    {id: 2, message: "Are we still on for Today"},
    {id: 3, message: "Cool. It's settled. Tomorrow will discuss the project."},
    {id: 4, message: "I suggest a meeting on Tuesday. What do you think?"}

]

ReactDOM.render(<App myPostData={myPostData} dialogsData={dialogsData} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
