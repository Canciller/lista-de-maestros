import React from 'react';

import colors from 'styles/colors';
import layout from 'styles/layout';

import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

const ThemeContext = React.createContext();

class Theme extends React.Component {
    state = {
        themes: [light, dark],
        theme: light,
        colors,
        layout,
    };

    setTheme = name => {
        const theme = this.state.themes[name];
        if (theme) this.setState({ theme });
    };

    render() {
        const { children } = this.props;
        const { themes, theme, colors, layout } = this.state;
        const { setTheme } = this;

        return (
            <ThemeContext.Provider
                value={{
                    themes,
                    theme: { ...theme, setTheme },
                    colors,
                    layout,
                }}
            >
                {children}
            </ThemeContext.Provider>
        );
    }
}

const withTheme = Component => {
    return props => {
        return (
            <ThemeContext.Consumer>
                {context => {
                    return <Component {...props} {...context} />;
                }}
            </ThemeContext.Consumer>
        );
    };
};

export { withTheme, ThemeContext };

export default Theme;
