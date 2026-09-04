import { router } from 'expo-router'
import { SectionList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SettingsItem from '../components/SettingsItem'
import { settingsConfig } from '../config/settings.config'

const SettingsScreen = () => {
    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="flex-1 bg-background px-4"
        >
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    Settings
                </Text>
            </View>
            <SectionList
                sections={settingsConfig}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section }) => (
                    <Text className="mb-2 text-sm font-semibold text-muted-foreground uppercase">
                        {section.title}
                    </Text>
                )}
                renderItem={({ item }) => (
                    <SettingsItem
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        onPress={() => router.push(item.route as any)}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default SettingsScreen