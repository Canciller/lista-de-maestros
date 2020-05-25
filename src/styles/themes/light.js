import { Theme, Color } from 'styles/util';

let theme = new Theme(
    new Color(41, 72, 255), // primary
    new Color(41, 72, 255), // secondary
    new Color(248, 248, 248), // background
    new Color(60, 60, 60), // foreground
    {
        white: new Color(248, 248, 248),
        red: new Color(239, 71, 58),
        blue: new Color(57, 106, 252),
        green: new Color(17, 153, 142),
        gray: new Color(184, 184, 184),
        yellow: new Color(144, 153, 21),
    }
);

export { theme as lightTheme };

export default theme.css();
