import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link as NavLink, useRouteMatch } from 'react-router-dom';
import { ThemeContext, withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        position: 'relative',
    },
    indicator: {
        position: 'absolute',
        width: 4,
        height: '100%',
        left: 0,
    },
    link: {
        fontWeight: 300,
        fontSize: 14,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 25px',
        transition: 'all 150ms ease-in-out',
    },
    linkActive: {
        fontWeight: 'bold',
    },
};

const LinkBase = ({ style, styles, to, children, ...props }) => {
    styles = styles || {};

    let match = useRouteMatch({
        path: to,
        exact: true,
    });

    let context = useContext(ThemeContext);
    const { nav } = context.theme;

    return (
        <div
            style={mergeStyles(defaultStyles.root, styles.root, style)}
            {...props}
        >
            <NavLink
                style={mergeStyles(
                    nav.link,
                    defaultStyles.link,
                    styles.link,
                    match && nav.link.active,
                    match && defaultStyles.linkActive,
                    match && styles.linkActive
                )}
                to={to}
            >
                <div
                    style={mergeStyles(
                        nav.link.active.indicator,
                        defaultStyles.indicator,
                        styles.indicator,
                        match && nav.link.active.indicator.active,
                        match && defaultStyles.indicatorActive,
                        match && styles.indicatorActive
                    )}
                />
                {children}
            </NavLink>
        </div>
    );
};

class Link extends React.Component {
    state = {};

    onMouseEnter = () =>
        this.setState({ hover: this.props.theme.nav.link.hover });

    onMouseLeave = () => this.setState({ hover: undefined });

    render() {
        const { children, styles, theme, ...props } = this.props;
        const { hover } = this.state;

        return (
            <LinkBase
                styles={{
                    ...styles,
                    link: hover,
                }}
                {...props}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {children}
            </LinkBase>
        );
    }
}

Link.defaultProps = {
    styles: {},
};

export default withTheme(Link);
