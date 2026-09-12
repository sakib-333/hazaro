import AppHeader from '@/components/AppHeader';
import { AppProvider } from '@/components/AppProvider';
import GameDetailsHeaderActions from '@/components/header-right-action/GameDetailsHeaderActions';
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
              <AppHeader
                title={t('gameDetails.title')}
                rightAction={
                  <GameDetailsHeaderActions
                    onEdit={() => console.log("Edit button pressed")}
                    onDelete={() => console.log("Delete button pressed")}
                  />
                }
              />
            ),
          }}
        />
      </Stack>
    </AppProvider>
  )
}

export default RootLayout