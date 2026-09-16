import { AppProvider } from '@/components/AppProvider';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StatusBar, useColorScheme } from 'react-native';
import "../global.css";

const RootLayout = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <AppProvider>
      <StatusBar
        hidden={false}
        backgroundColor={isDark ? "#020617" : "#FFFFFF"}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

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
            headerShown: false,
          }}
        />
      </Stack>
    </AppProvider>
  )
}

export default RootLayout