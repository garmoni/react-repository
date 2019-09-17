import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FrendsNavbar from "./FrendsNavbar/FrendsNavbar";

const Navbar = (props) => {

    let friendsElement = props.state.barFriend.map (friend => <FrendsNavbar namefriends={friend.namefriends} imagefriends={friend.imagefriends}/>);

    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.navLi}><NavLink to="/profile" activeClassName={classes.linkActive}>Profile</NavLink></li>
                <li className={classes.navLi}><NavLink to="/dialogs" activeClassName={classes.linkActive}>Message</NavLink></li>
                <li className={classes.navLi}><NavLink to="/news" activeClassName={classes.linkActive}>News</NavLink></li>
                <li className={classes.navLi}><NavLink to="/music" activeClassName={classes.linkActive}>Music</NavLink></li>
                <li className={classes.navLi}><a href="#" activeClassName={classes.linkActive}>Settings</a></li>
            </ul>
            <div className={classes.friendsBlock}>
                <h3>Friends</h3>
                <ul>
                    {friendsElement}
                </ul>
            </div>
        </nav>);
}

export default Navbar;