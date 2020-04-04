import { lightTheme } from 'styles/themes/light';
import { Color } from 'styles/util';

const theme = lightTheme;

theme.foreground = theme.background;
theme.background = new Color(29, 30, 36);

export { theme as darkTheme };

export default theme.css();
