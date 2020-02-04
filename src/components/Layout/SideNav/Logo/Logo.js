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
    },
    logo: {
        marginLeft: 4,
    },
};

export default props => {
    const context = useContext(ThemeContext);
    const { theme } = context;

    return (
        <Link to="/" style={mergeStyles(theme.nav.logo, defaultStyles.root)}>
            <FontAwesomeIcon icon={faCube} />
            <span style={defaultStyles.logo}>Maestros.</span>
        </Link>
    );
};
