import { AppProvider } from '@/components/AppProvider';
import { Stack } from 'expo-router';
import "../global.css";

const RootLayout = () => {
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
      </Stack>
    </AppProvider>
  )
}

export default RootLayout