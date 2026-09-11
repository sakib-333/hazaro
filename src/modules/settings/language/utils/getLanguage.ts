import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEFAULT_SETTINGS } from "@/constants/data/default.settings.data";
import { SETTINGS_KEY } from "@/constants/storage-key/settings.key";
import { Language } from "@/types/settings.types";

export const getLanguage = async (): Promise<Language> => {
    try {
        const storedSettings = await AsyncStorage.getItem(SETTINGS_KEY);

        if (!storedSettings) {
            return DEFAULT_SETTINGS.language;
        }

        const parsedSettings = JSON.parse(storedSettings);

        return parsedSettings.language ?? DEFAULT_SETTINGS.language;
    } catch (error) {
        console.error("Error while fetching language:", error);

        return DEFAULT_SETTINGS.language;
    }
};