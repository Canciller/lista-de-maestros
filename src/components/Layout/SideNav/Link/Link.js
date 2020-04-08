import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as NavLink, useRouteMatch } from 'react-router-dom';
import { ThemeContext } from 'components/Theme';
import mergeStyles from 'util/mergeStyles';
import './Link.scss';

const Link = ({ to, children }) => {
    const match = useRouteMatch({
        path: to,
        exact: true,
    });

    const theme = useContext(ThemeContext);

    return (
        <div 
        className="SideNav-Link" style={
            match && {
                background: 'rgba(255, 255, 255, 0.1)'
            }
        }>
            <NavLink
                style={mergeStyles(
                    {
                        color: theme.colors.white.normal,
                    },
                    match && {
                        fontWeight: 'bold',
                    }
                )}
                to={to}
            >
                {children}
            </NavLink>
        </div>
    );
};

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any,
};

export default Link;
