import { useThemeColors } from '@/hooks/useThemeColors'
import { EllipsisVertical } from 'lucide-react-native'
import { Pressable } from 'react-native'

const GameDetailsHeaderActions = () => {
    const colorScheme = useThemeColors()
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel="More actions"
            className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
            hitSlop={8}
        >
            <EllipsisVertical
                size={22}
                color={colorScheme.foreground}
            />
        </Pressable>
    )
}

export default GameDetailsHeaderActions