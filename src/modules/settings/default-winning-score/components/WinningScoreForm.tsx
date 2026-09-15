import { useState } from 'react'
import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native'

type WinningScoreFormProps = {
    initialValue: number
    onSave: (score: number) => Promise<void>
}

const WinningScoreForm = ({
    initialValue,
    onSave,
}: WinningScoreFormProps) => {
    const [score, setScore] = useState(String(initialValue))
    const [isSaving, setIsSaving] = useState(false)

    const numericScore = Number(score)

    const isInvalid =
        !score.trim() ||
        Number.isNaN(numericScore) ||
        numericScore <= 0

    const handleSave = async () => {
        if (isInvalid || isSaving) {
            return
        }

        try {
            setIsSaving(true)

            await onSave(numericScore)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <View className="gap-6">
            <View className="gap-2">
                <Text className="text-sm font-medium text-foreground">
                    Default Winning Score
                </Text>

                <TextInput
                    value={score}
                    onChangeText={setScore}
                    keyboardType="number-pad"
                    placeholder="Enter winning score"
                    className="h-12 rounded-xl border border-border bg-card px-4 text-base text-foreground"
                />

                <Text className="text-sm text-muted-foreground">
                    New games will use this score as the default winning target.
                </Text>
            </View>

            <Pressable
                onPress={handleSave}
                disabled={isInvalid || isSaving}
                className={`h-12 items-center justify-center rounded-xl ${isInvalid || isSaving
                        ? 'bg-primary/50'
                        : 'bg-primary active:opacity-80'
                    }`}
            >
                {isSaving ? (
                    <ActivityIndicator />
                ) : (
                    <Text className="font-semibold text-primary-foreground">
                        Save
                    </Text>
                )}
            </Pressable>
        </View>
    )
}

export default WinningScoreForm