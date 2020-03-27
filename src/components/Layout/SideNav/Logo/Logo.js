import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        fontWeight: 'bold',
        margin: 'auto auto',
        fontSize: 24,
        textDecoration: 'none',
        letterSpacing: -1,
        whiteSpace: 'nowrap',
    },
    logo: {
        marginLeft: 4,
    },
};

const Logo = () => {
    const theme = useContext(ThemeContext);

    return (
        <Link
            to="/"
            style={mergeStyles(
                {
                    color: theme.colors.white.normal,
                },
                defaultStyles.root
            )}
        >
            <span style={defaultStyles.logo}>Maestros.</span>
        </Link>
    );
};

//<FontAwesomeIcon icon={faCube} />

export default Logo;
