import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEFAULT_SETTINGS } from "@/constants/data/default.settings.data";
import { SETTINGS_KEY } from "@/constants/storage-key/settings.key";
import { Language } from "@/types/settings.types";

export const updateLanguage = async (
    language: Language,
): Promise<Language> => {
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
            language,
        };

        await AsyncStorage.setItem(
            SETTINGS_KEY,
            JSON.stringify(updatedSettings),
        );

        return language;
    } catch (error) {
        console.error("Error while updating language:", error);
        throw error;
    }
};