export type ThemeMode = 'light' | 'dark' | 'system';

export type Language = 'en' | 'bn';

export type AppSettings = {
    defaultWinningScore: number;
    theme: ThemeMode;
    language: Language;
};