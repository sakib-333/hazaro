import { AppProvider } from '@/components/AppProvider';
import SettingsHeader from '@/components/SettingsHeader';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import "../global.css";

const RootLayout = () => {
  const { t } = useTranslation();
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="games/[gameId]"
          options={{
            headerShown: true,
            header: () => (
              <SettingsHeader
                title={t("gameDetails.title")}
              />
            ),
          }}
        />
      </Stack>
    </AppProvider>
  )
}

export default RootLayout