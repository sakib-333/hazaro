import { settingsConfig } from '@/config/settings.config'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { SectionList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SettingsItem from './SettingsItem'

const SettingsTab = () => {
  const { t } = useTranslation()

  return (
    <SafeAreaView
            edges={["top", "left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    {t('bottomTabs.settings')}
                </Text>
            </View>
            <SectionList
                sections={settingsConfig}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section }) => (
                    <Text className="mb-2 text-sm font-semibold text-muted-foreground uppercase">
                        {t(section.title)}
                    </Text>
                )}
                renderItem={({ item }) => (
                    <SettingsItem
                        title={t(item.title)}
                        description={item.description ? t(item.description) : undefined}
                        icon={item.icon}
                        onPress={() => router.push(item.route as any)}
                    />
                )}
            />
        </SafeAreaView>
  )
}

export default SettingsTab
