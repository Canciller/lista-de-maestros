import React from 'react';

import './Header.scss';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCog } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <div className="Header-container">
                <p className="Settings">Settings</p>
                <span className="Profile-pic"></span>
                
                <p className="Profile">Perfil</p>
        </div>
    );
}

export default Header;
