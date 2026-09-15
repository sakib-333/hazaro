import { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import WinningScoreForm from '../components/WinningScoreForm'
import { getDefaultWinningScore } from '../services/getDefaultWinningScore'
import { updateDefaultWinningScore } from '../services/updateDefaultWinningScore'

const DefaultWinningScoreScreen = () => {
    const [defaultWinningScore, setDefaultWinningScore] =
        useState<number | null>(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadDefaultWinningScore = async () => {
            try {
                const score = await getDefaultWinningScore()

                setDefaultWinningScore(score)
            } catch (error) {
                console.error(error)

                Alert.alert(
                    'Something went wrong',
                    'Unable to load the default winning score.'
                )
            } finally {
                setIsLoading(false)
            }
        }

        loadDefaultWinningScore()
    }, [])

    const handleSave = async (score: number) => {
        try {
            await updateDefaultWinningScore(score)

            setDefaultWinningScore(score)

            Alert.alert(
                'Saved',
                'Default winning score has been updated successfully.'
            )
        } catch (error) {
            console.error(error)

            Alert.alert(
                'Something went wrong',
                'Unable to save the default winning score.'
            )
        }
    }

    if (isLoading || defaultWinningScore === null) {
        return (
            <SafeAreaView
                edges={['left', 'right']}
                className="flex-1 items-center justify-center bg-background"
            >
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView
            edges={['left', 'right']}
            className="flex-1 bg-background px-4"
        >
            <View className="pt-6">

                <WinningScoreForm
                    initialValue={defaultWinningScore}
                    onSave={handleSave}
                />
            </View>
        </SafeAreaView>
    )
}

export default DefaultWinningScoreScreen