import { useUnstableNativeVariable } from "nativewind";

const rgb = (value: string | undefined) => {
    if (!value) return undefined;

    return `rgb(${value.replaceAll(" ", ", ")})`;
};

export const useThemeColors = () => {
    const background =
        useUnstableNativeVariable("--color-background");

    const surface =
        useUnstableNativeVariable("--color-surface");

    const foreground =
        useUnstableNativeVariable("--color-foreground");

    const mutedForeground =
        useUnstableNativeVariable("--color-muted-foreground");

    const primary =
        useUnstableNativeVariable("--color-primary");

    const border =
        useUnstableNativeVariable("--color-border");

    return {
        background: rgb(background),
        surface: rgb(surface),
        foreground: rgb(foreground),
        mutedForeground: rgb(mutedForeground),
        primary: rgb(primary),
        border: rgb(border),
    };
};