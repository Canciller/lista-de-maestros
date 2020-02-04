import colors from 'styles/colors';

const linearGradient = (a, b) => {
    return `linear-gradient(to top, ${b}, ${a}`;
};

let theme = {
    linearGradient,
};

theme.nav = {
    background: 'linear-gradient(to bottom, #2948ff, #396afc)',
    logo: {
        color: colors.white.light,
    },
    separator: {
        background: 'rgb(255, 255, 255, 0.2)',
    },
    link: {
        color: colors.white.light,
        active: {
            background: 'rgb(57, 106, 252, 0.8)',
            indicator: {
                active: {
                    background: colors.white.light,
                },
            },
        },
        hover: {
            background: 'rgb(57, 106, 252, 0.5)',
        },
    },
};

theme.header = {
    background: colors.white.light,
    separator: {
        background: 'rgba(0, 0, 0, 0.2)',
    },
    profile: {
        username: {
            color: colors.foreground,
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
        color: colors.foreground,
    },
    separator: theme.header.separator,
};

theme.content = {
    background: colors.white.dark,
};

theme.icon = {
    color: 'rgba(0, 0, 0, 0.4)',
    hover: {
        color: 'rgba(0, 0, 0, 0.5)',
    },
};

theme.button = {
    transition: 'all 150ms ease-in-out',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.foreground,
    color: colors.foreground,
};

theme.button.cyan = {
    ...theme.button,
    borderColor: colors.cyan.light,
    color: colors.cyan.light,
    hover: {
        borderColor: colors.cyan.dark,
        color: colors.cyan.dark,
    },
};

theme.button.green = {
    ...theme.button,
    borderColor: colors.green.light,
    color: colors.green.light,
    hover: {
        borderColor: colors.green.dark,
        color: colors.green.dark,
    },
};

theme.button.blue = {
    ...theme.button,
    borderColor: colors.blue.light,
    color: colors.blue.light,
    hover: {
        borderColor: colors.blue.dark,
        color: colors.blue.dark,
    },
};

theme.button.red = {
    ...theme.button,
    borderColor: colors.red.light,
    color: colors.red.light,
    hover: {
        borderColor: colors.red.dark,
        color: colors.red.dark,
    },
};

theme.button.yellow = {
    ...theme.button,
    borderColor: colors.yellow.light,
    color: colors.yellow.light,
    hover: {
        borderColor: colors.yellow.dark,
        color: colors.yellow.dark,
    },
};

export default theme;
