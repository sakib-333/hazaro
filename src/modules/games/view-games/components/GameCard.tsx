import { useThemeColors } from "@/hooks/useThemeColors";
import { formatDateTime } from "@/utils/formattedDate";
import { ChevronRight } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type GameCardProps = {
    name: string;
    createdAt: number;
    onPress?: () => void;
};

const GameCard = ({ name, createdAt, onPress }: GameCardProps) => {

    const colors = useThemeColors();

    return (
        <Pressable
            onPress={onPress}
            className="mb-3 rounded-2xl border border-border bg-card px-4 py-4"
        >
            <View className="flex-row items-center justify-between">
                <View className="mr-4 flex-1">
                    <Text
                        numberOfLines={1}
                        className="text-lg font-semibold text-foreground"
                    >
                        {name}
                    </Text>

                    <Text className="mt-1 text-sm text-muted-foreground">
                        {formatDateTime(createdAt)}
                    </Text>
                </View>

                <View className="h-9 w-9 items-center justify-center rounded-full bg-muted">
                    <ChevronRight size={20} color={colors.mutedForeground} />
                </View>
            </View>
        </Pressable>
    );
};

export default GameCard;