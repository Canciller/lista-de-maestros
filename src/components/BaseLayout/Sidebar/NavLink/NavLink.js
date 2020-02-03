import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import classNames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import './NavLink.scss';

const LinkStyled = styled(Link)`
    ${props => {
        const link = props.theme.navigation.link;

        return `
            color: ${link.normal.color};
            background: ${link.normal.background};

            :hover {
                color: ${link.hover.color};
                background: ${link.hover.background};
            }
        `;
    }}
`;

const NavLink = ({ children, className, to }) => {
    let match = useRouteMatch({
        path: to,
        exact: true,
    });

    let theme = useContext(ThemeContext);
    const link = theme.navigation.link;

    return (
        <div className={classNames(className, 'NavLink')}>
            <LinkStyled style={match ? link.active : undefined} to={to}>
                {children}
            </LinkStyled>
        </div>
    );
};

export default NavLink;
