let state = {
    profilePage: {
        myPostData: [
            {id: 1, message: "Hi, how are you?", likenum: 15},
            {id: 2, message: "It's my first post", likenum: 10},
            {id: 3, message: "It's my first post", likenum: 10},
            {id: 4, message: "It's my first post", likenum: 10}
        ]

    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dmitry', image: 'guy-6.jpg'},
            {id: 2, name: 'Mary', image: 'woman-5.jpg'},
            {id: 3, name: 'John', image: 'guy-4.jpg'},
            {id: 4, name: 'Ria', image: 'woman-6.jpg'},
            {id: 5, name: 'Jake', image: 'guy-3.jpg'}
        ],
        messages: [
            {id: 1, message: "Hi Mary, Is it ok if we schedule the meeting tomorrow?", avamessage:"guy-6.jpg"},
            {id: 2, message: "Are we still on for Today", avamessage:"woman-5.jpg"},
            {id: 3, message: "Cool. It's settled. Tomorrow will discuss the project.", avamessage:"guy-6.jpg"},
            {id: 4, message: "I suggest a meeting on Tuesday. What do you think?", avamessage:"woman-5.jpg"}
        ]
    },
    sideBar: {
        barFriend:
            [
                {id: 1, namefriends: 'Dmitry', imagefriends: 'guy-6.jpg'},
                {id: 2, namefriends: 'Mary', imagefriends: 'woman-5.jpg'},
                {id: 3, namefriends: 'John', imagefriends: 'guy-4.jpg'}
            ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likenum: 0
    };

    state.profilePage.myPostData.push(newPost);
}

export default state;