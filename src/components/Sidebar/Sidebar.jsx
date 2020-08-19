import React from 'react';
import userNoPhoto from '../../assets/images/user_default.png'
import {NavLink} from "react-router-dom";
import css from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <div className="d-flex align-items-center">
                <img className="user-avatar" src={userNoPhoto} alt=""/>
                <p className="user-name">Duman Torbayev</p>
            </div>

            <div className={css.sidebar__links}>
                <NavLink to="/terminals">Терминалы </NavLink>
                <NavLink to="/buyers">Клиенты </NavLink>
            </div>

            <p className={css.sidebar__copyright}>Copyright © 2020</p>
        </div>
    );
};

export default Sidebar;