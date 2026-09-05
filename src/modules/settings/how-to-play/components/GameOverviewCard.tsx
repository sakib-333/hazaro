import { useThemeColors } from "@/hooks/useThemeColors";
import { Users } from "lucide-react-native";
import { Text, View } from "react-native";

const GameOverviewCard = () => {
    const colors = useThemeColors();

    return (
        <View className="mt-3 rounded-2xl border border-border bg-card p-4">
            <View className="flex-row">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                    <Users
                        size={20}
                        color={colors.primary}
                    />
                </View>

                <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                        4 Players
                    </Text>

                    <Text className="mt-1 text-sm leading-5 text-muted-foreground">
                        A game is played by four players. Each player
                        receives and scores cards during every round.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default GameOverviewCard;