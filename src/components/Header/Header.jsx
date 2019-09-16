import React from 'react';
import  classes from './Header.module.css';
import  classesApp from '../../App.module.css';
const Header = () => {
    return <header className={`${classes.header} ${classesApp.wrapper}`}>
        <a href="/">SocialNetwork</a>
    </header>
}

export default Header;