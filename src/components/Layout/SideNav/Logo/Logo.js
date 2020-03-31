import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import './Logo.scss';

const Logo = props => {
    const theme = useContext(ThemeContext);

    return (
        <Link
            to="/"
            className="Logo"
            style={{
                color: theme.colors.white.normal,
            }}
            {...props}
        >
            <span>Maestros.</span>
        </Link>
    );
};

//<FontAwesomeIcon icon={faCube} />

export default Logo;
