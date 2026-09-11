import { DEFAULT_SETTINGS } from "@/constants/data/default.settings.data";
import { SETTINGS_KEY } from "@/constants/storage-key/settings.key";
import { ThemeMode } from "@/types/settings.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTheme = async (): Promise<ThemeMode> => {
    try {
        const storedSettings = await AsyncStorage.getItem(SETTINGS_KEY);

        if (!storedSettings) {
            return DEFAULT_SETTINGS.theme;
        }

        const parsedSettings = JSON.parse(storedSettings);

        return parsedSettings.theme ?? DEFAULT_SETTINGS.theme;
    } catch (error) {
        console.error("Error while fetching theme:", error);

        return DEFAULT_SETTINGS.theme;
    }
};