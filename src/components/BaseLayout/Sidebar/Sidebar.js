import React from 'react';
import classNames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStream,
    faHeart,
    faEye
} from '@fortawesome/free-solid-svg-icons'

import './Sidebar.scss';

const NavLink = ({ children, className, to }) => {
    let match = useRouteMatch({
        path: to,
        exact: true
    });

    return (
        <div className={
            classNames(
                className,
                "NavLink",
                { active: match }
            )}
        >
            <Link
                className={
                    classNames(
                        className ? className + "-link" : undefined,
                        "NavLink-link",
                        { active: match }
                    )}
                to={to}
            >
                {children}
            </Link>
        </div>
    );
}

class Sidebar extends React.Component {
    render() {
        return (
            <div
                className="Sidebar"
            >
                <div
                    className="Sidebar-header"
                >
                    <NavLink
                        className="Sidebar-logo"
                        to="/"
                    >
                        Lista de maestros
                    </NavLink>
                </div>
                <div className="Sidebar-nav">
                    <NavLink
                        className="Sidebar-link"
                    >
                        <FontAwesomeIcon icon={faStream}/>
                        <span>
                            Lista
                        </span>
                    </NavLink>
                    <NavLink
                        className="Sidebar-link"
                    >
                        <FontAwesomeIcon icon={faHeart}/>
                        <span>
                            Mis aportes
                        </span>
                    </NavLink>
                    <NavLink
                        className="Sidebar-link"
                    >
                        <FontAwesomeIcon icon={faEye}/>
                        <span>
                            Revision
                        </span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Sidebar;
