import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'components/Theme';
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
