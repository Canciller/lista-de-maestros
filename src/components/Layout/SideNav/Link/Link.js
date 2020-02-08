import React, { useContext } from 'react';
import { Link as NavLink, useRouteMatch } from 'react-router-dom';
import { ThemeContext, withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        position: 'relative',
    },
    indicator: {
        position: 'absolute',
        width: 2,
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

    let theme = useContext(ThemeContext);

    return (
        <div
            style={mergeStyles(defaultStyles.root, styles.root, style)}
            {...props}
        >
            <NavLink
                style={mergeStyles(
                    {
                        color: theme.colors.white.normal,
                    },
                    defaultStyles.link,
                    styles.link,
                    match && {
                        background: theme.primary.light,
                    },
                    match && defaultStyles.linkActive,
                    match && styles.linkActive
                )}
                to={to}
            >
                <div
                    style={mergeStyles(
                        {},
                        defaultStyles.indicator,
                        styles.indicator,
                        match && {
                            background: theme.colors.white.light,
                        },
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
        this.setState({
            hover: {
                background: this.props.theme.primary.light,
            },
        });

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
