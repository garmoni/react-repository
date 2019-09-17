import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.linkActive}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.linkActive}>Message</NavLink></li>
                <li><NavLink to="/news" activeClassName={classes.linkActive}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={classes.linkActive}>Music</NavLink></li>
                <li><a href="#" activeClassName={classes.linkActive}>Settings</a></li>
            </ul>
            <div className={classes.friendsBlock}>
                <h3>Friends</h3>
            </div>
        </nav>);
}

export default Navbar;