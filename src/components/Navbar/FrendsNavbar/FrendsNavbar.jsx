import React from 'react';
import f from './FrendsNavbar.module.css';


const FrendsNavbar = (props) => {

    return (
            <li className={f.item}>
                <img src={"http://themekit.frontendmatter.com/dist/themes/admin/images/people/110/" + props.imagefriends}/>
                <div>{props.namefriends}</div>
            </li> );
}

export default FrendsNavbar;