import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from 'routes';
import Sidebar from 'components/Sidebar';
import Logo from './Logo';
import Link from './Link';
import mergeStyles from 'utils/mergeStyles';

class SideNav extends React.Component {
    render() {
        const { theme, styles, ...props } = this.props;

        return (
            <Sidebar
                title={<Logo />}
                separator={{
                    color: theme.colors.white.light,
                }}
                styles={{
                    root: mergeStyles(
                        {
                            userSelect: 'none',
                            background: theme.primary.normal,
                            transition: 'all 200ms ease-in-out',
                            overflowX: 'hidden',
                        },
                        styles.root
                    ),
                    title: mergeStyles(
                        {
                            display: 'flex',
                            ...theme.layout.header,
                        },
                        styles.title
                    ),
                    separator: styles.separator,
                }}
                {...props}
            >
                <Sidebar.Section
                    style={mergeStyles(
                        {
                            marginTop: 20,
                        },
                        styles.content
                    )}
                >
                    {Object.keys(Routes).map(key => {
                        const route = Routes[key];
                        if (route.name === undefined) return undefined;
                        return (
                            <Link to={route.path} key={key}>
                                <FontAwesomeIcon icon={route.icon} />
                                <span
                                    style={{
                                        marginLeft: 18,
                                    }}
                                >
                                    {route.name}
                                </span>
                            </Link>
                        );
                    })}
                </Sidebar.Section>
            </Sidebar>
        );
    }
}

SideNav.defaultProps = {
    styles: {},
};

SideNav.propTypes = {
    theme: PropTypes.object.isRequired,
    styles: PropTypes.object,
};

export default withTheme(SideNav);
