function HSL(rgb) {
    let r = rgb.r / 255,
        g = rgb.g / 255,
        b = rgb.b / 255;

    let cmax = Math.max(r, g, b),
        cmin = Math.min(r, g, b);

    let dc = cmax - cmin;

    let h = 0;

    if (dc === 0);
    else if (cmax === r) h = 60 * (((g - b) / dc) % 6);
    else if (cmax === g) h = 60 * ((b - r) / dc + 2);
    else if (cmax === b) h = 60 * ((r - g) / dc + 4);

    let l = (cmax + cmin) / 2;

    let s = 0;

    if (dc === 0);
    else if (dc !== 0) s = dc / (1 - Math.abs(2 * l - 1));

    return { h: Math.floor(h), s: Math.floor(s * 100), l: Math.floor(l * 100) };
}

function RGB(hsl) {
    let { h, s, l } = hsl;

    if (h < 0) h = 0;
    else if (h >= 360) h = 359;

    s /= 100;
    if (s < 0) s = 0;
    else if (s > 1) s = 1;

    l /= 100;
    if (l < 0) l = 0;
    if (l > 1) l = 1;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2;

    let rgb = { r: 0, g: 0, b: 0 };

    if (h >= 0 && h < 60) {
        rgb.r = c;
        rgb.g = x;
    } else if (h >= 60 && h < 120) {
        rgb.r = x;
        rgb.g = c;
    } else if (h >= 120 && h < 180) {
        rgb.g = c;
        rgb.b = x;
    } else if (h >= 180 && h < 240) {
        rgb.g = x;
        rgb.b = c;
    } else if (h >= 240 && h < 300) {
        rgb.r = x;
        rgb.b = c;
    } else if (h >= 300 && h < 360) {
        rgb.r = c;
        rgb.b = x;
    }

    return {
        r: Math.ceil((rgb.r + m) * 255),
        g: Math.ceil((rgb.g + m) * 255),
        b: Math.ceil((rgb.b + m) * 255),
    };
}

class Color {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    css() {
        const { r, g, b, a } = this;

        return `rgba(${r},${g},${b},${a})`;
    }

    dark() {
        let hsl = HSL(this),
            l = Math.min(hsl.l, 4);

        hsl.l -= l;

        let rgb = RGB(hsl);

        return new Color(rgb.r, rgb.g, rgb.b, this.a);
    }

    light() {
        let hsl = HSL(this),
            l = Math.min(100 - hsl.l, 4);

        hsl.l += l;

        let rgb = RGB(hsl);

        return new Color(rgb.r, rgb.g, rgb.b, this.a);
    }

    foreground() {
        let hsl = HSL(this);

        if (hsl.l <= 60) return new Color(255, 255, 255, this.a);
        else return new Color(0, 0, 0, this.a);
    }
}

class Theme {
    constructor(primary, secondary, background, foreground, colors = {}) {
        this.primary = primary;
        this.secondary = secondary;
        this.background = background;
        this.foreground = foreground;
        this.colors = colors;
    }

    _color(color) {
        return {
            light: color.light().css(),
            normal: color.css(),
            dark: color.dark().css(),
            foreground: color.foreground().css(),
        };
    }

    _colors() {
        let colors = {};

        for (let key in this.colors)
            colors[key] = this._color(this.colors[key]);

        return colors;
    }

    css() {
        return {
            primary: this._color(this.primary),
            secondary: this._color(this.secondary),
            background: this._color(this.background),
            foreground: this._color(this.foreground),
            colors: this._colors(),
        };
    }
}

export { Theme, Color };
