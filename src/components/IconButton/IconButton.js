import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const IconButton = ({ icon, size, className, ...other }) => {
    return (
        <div className={classNames(className, 'IconButton')} {...other}>
            <FontAwesomeIcon icon={icon} size={size} />
        </div>
    );
};

export default styled(IconButton)`
    color: ${props => props.theme.icon.normal.color};
    cursor: pointer;
    transition: all 150ms ease-in-out;
    padding: 3px;
    :hover {
        color: ${props => props.theme.icon.hover.color};
    }
`;
