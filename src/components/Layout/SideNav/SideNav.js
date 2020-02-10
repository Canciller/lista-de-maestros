import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from 'routes';
import Sidebar from 'components/Sidebar';
import Logo from './Logo';
import Link from './Link';

class SideNav extends React.Component {
    render() {
        const { theme, ...props } = this.props;

        return (
            <Sidebar
                title={<Logo />}
                separator={{
                    color: theme.colors.white.light,
                }}
                styles={{
                    root: {
                        userSelect: 'none',
                        background: theme.primary.normal,
                        transition: 'all 150ms ease-in-out',
                    },
                    title: {
                        display: 'flex',
                        ...theme.layout.header,
                    },
                }}
                {...props}
            >
                <Sidebar.Section
                    style={{
                        marginTop: 20,
                    }}
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

SideNav.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme(SideNav);
