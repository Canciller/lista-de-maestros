let theme = {
    background: '#282a36',
    foreground: '#f8f8f2',
    colors: {
        gray: '#b3b3b3',
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
            light: '#e6e6e6',
            dark: '#bfbfbf',
        },
    },
};

theme.navigation = {
    link: {
        normal: {
            color: theme.colors.gray,
        },
        active: {
            color: theme.colors.white.light,
            background: 'rgb(53, 56, 71)',
        },
        hover: {
            color: theme.colors.white.light,
            background: 'rgb(61, 64, 82)',
        },
    },
};

theme.sidebar = {
    background: theme.background,
    color: theme.foreground,
};

theme.header = {
    background: "#2a2d3a",
    color: theme.foreground,
    profile: {
        borderColor: "rgb(53, 56, 71)"
    }
}

theme.content = {
    background: "#2d313f",
    color: theme.colors.foreground
}

export default {
    default: theme,
};
