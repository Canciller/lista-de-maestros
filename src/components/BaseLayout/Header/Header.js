import React from 'react';

import './Header.scss';

function Header(props) {
    return (
        <div className="bar-container">
            <div className="bar">
                <h2 className="bar-logo">Lista de maestros.</h2>
            </div>
        </div>
    );
}

export default Header;