import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faStream,
    faHeart,
    faEye,
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from 'components/Sidebar';
import Logo from './Logo';
import NavLink from './NavLink';

class SideNav extends React.Component {
    render() {
        const sidebar = this.props.theme.sidebar;

        return (
            <Sidebar
                width={250}
                title={<Logo />}
                separator={{
                    color: sidebar.separator.background,
                }}
                styles={{
                    root: {
                        userSelect: 'none',
                        background: sidebar.background,
                    },
                    title: {
                        height: 60, // sames as header height
                        display: 'flex',
                    },
                }}
            >
                <Sidebar.Section
                    style={{
                        marginTop: 20,
                    }}
                >
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Inicio</span>
                    </NavLink>
                    <NavLink to="/lista">
                        <FontAwesomeIcon icon={faStream} />
                        <span>Lista</span>
                    </NavLink>
                    <NavLink>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Mis aportes</span>
                    </NavLink>
                    <NavLink>
                        <FontAwesomeIcon icon={faEye} />
                        <span>Revision</span>
                    </NavLink>
                </Sidebar.Section>
            </Sidebar>
        );
    }
}

export default withTheme(SideNav);
