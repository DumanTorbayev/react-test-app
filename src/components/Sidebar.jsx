import React from 'react';
import userNoPhoto from '../assets/images/user_default.png'
import {NavLink} from "react-router-dom";

const Sidebar = ({avatar}) => {
    return (
       <>
          <nav id="sidebar">
             <div className="p-4 pt-5 h-100 d-flex flex-column">
                <img className="img logo rounded-circle mb-5" src={avatar ? avatar : userNoPhoto} alt=""/>
                <ul className="list-unstyled components mb-5">
                   <li className="active">
                      <NavLink to="/terminals">Терминалы </NavLink>
                   </li>
                   <li>
                      <NavLink to="/buyers">Клиенты </NavLink>
                   </li>
                </ul>

                <div className="footer mt-auto">
                   <p>Copyright © 2020</p>
                </div>

             </div>
          </nav>
       </>
    );
};

export default Sidebar;
