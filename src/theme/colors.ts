import { vars } from "nativewind";

export const themes = {
    light: vars({
        "--color-background": "255 255 255",
        "--color-surface": "248 250 252",
        "--color-foreground": "15 23 42",
        "--color-muted-foreground": "100 116 139",

        "--color-primary": "37 99 235",
        "--color-primary-foreground": "255 255 255",

        "--color-border": "226 232 240",

        "--color-danger": "220 38 38",
        "--color-danger-foreground": "255 255 255",
    }),

    dark: vars({
        "--color-background": "2 6 23",
        "--color-surface": "15 23 42",
        "--color-foreground": "248 250 252",
        "--color-muted-foreground": "148 163 184",

        "--color-primary": "96 165 250",
        "--color-primary-foreground": "15 23 42",

        "--color-border": "30 41 59",

        "--color-danger": "248 113 113",
        "--color-danger-foreground": "15 23 42",
    }),
};