import React from 'react';
import PropTypes from 'prop-types';

import layout from 'styles/layout';
import { light, dark } from 'styles/themes';

const ThemeContext = React.createContext();

class Theme extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        let themes = { light, dark };

        this.state = {
            themes,
            theme: themes[props.theme],
            name: props.theme,
            layout: layout,
        };
    }

    setTheme = name => {
        if (this.state.name === name) return;

        const theme = this.state.themes[name];
        if (theme) this.setState({ theme, name });
    };

    render() {
        const { children } = this.props;
        const { themes, theme, layout, name } = this.state;
        const { setTheme } = this;

        return (
            <ThemeContext.Provider
                value={{
                    ...theme,
                    themes,
                    layout,
                    setTheme,
                    name,
                }}
            >
                {children}
            </ThemeContext.Provider>
        );
    }
}

Theme.defaultProps = {
    theme: 'light',
};

Theme.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.any,
};

const withTheme = Component => {
    return props => {
        return (
            <ThemeContext.Consumer>
                {context => {
                    return <Component {...props} theme={context} />;
                }}
            </ThemeContext.Consumer>
        );
    };
};

export { withTheme, ThemeContext };

export default Theme;
