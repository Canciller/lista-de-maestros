import React from 'react';
import { withTheme } from 'components/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from 'routes';
import Sidebar from 'components/Sidebar';
import Logo from './Logo';
import Link from './Link';

class SideNav extends React.Component {
    render() {
        const { theme, layout } = this.props;

        return (
            <Sidebar
                width={250}
                title={<Logo />}
                separator={{
                    color: theme.nav.separator.background,
                }}
                styles={{
                    root: {
                        userSelect: 'none',
                        ...theme.nav,
                    },
                    title: {
                        display: 'flex',
                        ...layout.header,
                    },
                }}
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

export default withTheme(SideNav);
