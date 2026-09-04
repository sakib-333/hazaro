import { ThemeProvider } from '@/components/ThemeProvider';
import { Stack } from 'expo-router';
import "../global.css";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}

export default RootLayout