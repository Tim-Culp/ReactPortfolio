import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

let Sidebar = () => {
    return(
        <div id="sideBar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/mywork">My Work</NavLink></li>
                <li><NavLink to="/myjourney">My Journey</NavLink></li>
                <li><NavLink to="/contactme">Contact Me</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar;