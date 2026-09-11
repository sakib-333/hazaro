import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEFAULT_SETTINGS } from "@/constants/data/default.settings.data";
import { SETTINGS_KEY } from "@/constants/storage-key/settings.key";
import { ThemeMode } from "@/types/settings.types";

export const updateTheme = async (theme: ThemeMode): Promise<ThemeMode> => {
    try {
        const storedSettings = await AsyncStorage.getItem(SETTINGS_KEY);

        const currentSettings = storedSettings
            ? {
                ...DEFAULT_SETTINGS,
                ...JSON.parse(storedSettings),
            }
            : DEFAULT_SETTINGS;

        const updatedSettings = {
            ...currentSettings,
            theme,
        };

        await AsyncStorage.setItem(
            SETTINGS_KEY,
            JSON.stringify(updatedSettings),
        );

        return theme;
    } catch (error) {
        console.error("Error while updating theme:", error);
        throw error;
    }
};