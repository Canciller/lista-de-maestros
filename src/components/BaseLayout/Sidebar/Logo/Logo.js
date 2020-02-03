import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

import './Logo.scss';

const Logo = ({ className }) => {
    return (
        <Link className={classNames('Logo', className)} to="/">
            <FontAwesomeIcon icon={faCube} />
            <span>Maestros.</span>
        </Link>
    );
};

export default styled(Logo)`
    ${props => {
        const logo = props.theme.navigation.logo;

        return `
            color: ${logo.color}
        `;
    }}
`;
