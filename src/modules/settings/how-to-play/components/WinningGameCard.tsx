import { useThemeColors } from "@/hooks/useThemeColors";
import { Award, Crown } from "lucide-react-native";
import { Text, View } from "react-native";

const WinningGameCard = () => {
    const colors = useThemeColors();

    return (
        <View className="mt-3 rounded-2xl border border-border bg-card p-4">
            <View className="flex-row">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                    <Crown
                        size={20}
                        color={colors.primary}
                    />
                </View>

                <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                        Reach the winning score
                    </Text>

                    <Text className="mt-1 text-sm leading-5 text-muted-foreground text-justify">
                        After each round, the players&apos; total scores
                        are checked. The first player whose total score
                        reaches or exceeds the winning score wins the
                        game.
                    </Text>

                    <View className="mt-4 flex-row items-center justify-between rounded-xl bg-primary/5 px-3 py-3">
                        <Text className="text-sm font-medium text-muted-foreground">
                            Default winning score
                        </Text>

                        <View className="flex-row items-center">
                            <Award
                                size={18}
                                color={colors.primary}
                            />

                            <Text className="ml-2 text-base font-bold text-primary">
                                1000 points
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WinningGameCard;