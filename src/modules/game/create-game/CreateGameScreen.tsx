import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateGameScreen = () => {
    const { t} = useTranslation();
    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    {t('game.createGame.title')}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default CreateGameScreen