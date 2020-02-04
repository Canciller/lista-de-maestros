import React from 'react';
import PropTypes from 'prop-types';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    separator: {
        margin: '0 auto',
        width: '80%',
        height: '1px',
        borderRadius: '50%',
    },
};

class Sidebar extends React.Component {
    render() {
        const {
            width,
            style,
            styles,
            children,
            title,
            separator,
            ...props
        } = this.props;

        const Title = () => (
            <React.Fragment>
                <Sidebar.Section style={styles.title} styles={styles}>
                    {title}
                </Sidebar.Section>
                <Sidebar.Separator color={separator.color} styles={styles} />
            </React.Fragment>
        );

        return (
            <div
                style={mergeStyles(
                    { width: width },
                    defaultStyles.root,
                    styles.root,
                    style
                )}
                {...props}
            >
                {title ? <Title /> : undefined}
                {children}
            </div>
        );
    }
}

Sidebar.defaultProps = {
    styles: {},
    separator: {},
};

Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    styles: PropTypes.object,
    separator: PropTypes.object,
};

Sidebar.Separator = class extends React.Component {
    render() {
        const { color, style, styles, children, ...props } = this.props;

        return (
            <div
                style={mergeStyles(
                    { background: color },
                    defaultStyles.separator,
                    styles.separator,
                    style
                )}
                {...props}
            ></div>
        );
    }
};

Sidebar.Separator.defaultProps = {
    styles: {},
};

Sidebar.Separator.propTypes = {
    color: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

Sidebar.Section = class extends React.Component {
    render() {
        const { width, style, styles, children, ...props } = this.props;

        return (
            <div
                style={mergeStyles(
                    defaultStyles.section,
                    styles.section,
                    style
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
};

Sidebar.Section.defaultProps = {
    styles: {},
};

Sidebar.Section.propTypes = {
    styles: PropTypes.object,
    separator: PropTypes.bool,
};

export default Sidebar;
