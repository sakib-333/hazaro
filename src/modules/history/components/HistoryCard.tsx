import { useThemeColors } from "@/hooks/useThemeColors";
import { formatDateTime } from "@/utils/formattedDate";
import { ChevronRight, Trophy } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type HistoryCardProps = {
    name: string;
    createdAt: number;
    winner: string;
    onPress?: () => void;
};

const HistoryCard = ({
    name,
    createdAt,
    winner,
    onPress,
}: HistoryCardProps) => {
    const colors = useThemeColors();

    return (
        <Pressable
            onPress={onPress}
            className="mb-3 flex-row items-center rounded-2xl border border-border bg-card px-4 py-3"
        >
            <View className="mr-3 flex-1">
                <Text
                    numberOfLines={1}
                    className="text-base font-semibold text-foreground"
                >
                    {name}
                </Text>

                <View className="mt-1 flex-row items-center">
                    <Text className="text-sm text-muted-foreground">
                        {formatDateTime(createdAt)}
                    </Text>

                    <Text className="mx-2 text-sm text-muted-foreground">
                        •
                    </Text>

                    <Trophy size={14} color={colors.primary} />

                    <Text
                        numberOfLines={1}
                        className="text-sm font-medium text-muted-foreground ml-2"
                    >
                        {winner}
                    </Text>
                </View>
            </View>

            <ChevronRight
                size={20}
                color={colors.mutedForeground}
            />
        </Pressable>
    );
};

export default HistoryCard;