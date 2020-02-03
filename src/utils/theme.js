let theme = {};

theme.colors = {
    foreground: 'rgba(0, 0, 0, 0.5)',
    gray: {
        light: '#bfbfbf',
        dark: '#b3b3b3',
    },
    red: {
        light: '#ff6e67',
        dark: '#ff5555',
    },
    green: {
        light: '#5af77b',
        dark: '#50fa7b',
    },
    yellow: {
        light: '#f4f99d',
        dark: '#f1fa8c',
    },
    purple: {
        light: '#caa9fa',
        dark: '#bd93f9',
    },
    pink: {
        light: '#ff92d0',
        dark: '#ff79c6',
    },
    cyan: {
        light: '#9aedef',
        dark: '#8be9fd',
    },
    white: {
        light: '#f8f8f2',
        dark: '#e6e6e6',
    },
};

theme.navigation = {
    link: {
        normal: {
            color: theme.colors.white.light,
        },
        active: {
            background: 'rgb(57, 106, 252, 0.8)',
            line: {
                background: theme.colors.white.light,
            },
        },
        hover: {
            background: 'rgb(57, 106, 252, 0.5)',
        },
    },
    logo: {
        color: theme.colors.white.light,
    },
};

theme.sidebar = {
    background: 'linear-gradient(to bottom, #2948ff, #396afc)',
    separator: {
        background: 'rgb(255, 255, 255, 0.2)',
    },
};

theme.header = {
    background: theme.colors.white.light,
    separator: {
        background: 'rgba(0, 0, 0, 0.2)',
    },
    profile: {
        username: {
            color: theme.colors.foreground,
        },
        type: {
            color: 'rgba(0, 0, 0, 0.4)',
        },
        avatar: {
            borderColor: 'rgba(0, 0, 0, 0.2)',
        },
    },
};

theme.settings = {
    background: theme.header.background,
    borderColor: theme.header.separator.background,
    title: {
        color: theme.colors.foreground,
    },
    separator: theme.header.separator,
};

theme.content = {
    background: theme.colors.white.dark,
};

theme.icon = {
    normal: {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    hover: {
        color: 'rgba(0, 0, 0, 0.5)',
    },
};

export default {
    default: theme,
};
