import { Text, View } from "react-native";

const cardScores = [
    {
        cards: "A, K, Q, J, 10",
        points: "10 points",
    },
    {
        cards: "2, 3, 4, 5, 6, 7, 8, 9",
        points: "5 points",
    },
];

const CardScoringCard = () => {
    return (
        <View className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
            {cardScores.map((item, index) => (
                <View
                    key={item.cards}
                    className={`flex-row items-center px-4 py-4 ${
                        index !== cardScores.length - 1
                            ? "border-b border-border"
                            : ""
                    }`}
                >
                    <View className="flex-1">
                        <Text className="text-base font-semibold text-foreground">
                            {item.cards}
                        </Text>
                    </View>

                    <View className="rounded-lg bg-primary/5 px-3 py-1.5">
                        <Text className="text-sm font-semibold text-primary">
                            {item.points}
                        </Text>
                    </View>
                </View>
            ))}

            <View className="flex-row items-center justify-between border-t border-border bg-surface px-4 py-4">
                <Text className="text-sm font-semibold text-muted-foreground">
                    Total per round
                </Text>

                <Text className="text-base font-bold text-foreground">
                    360 points
                </Text>
            </View>
        </View>
    );
};

export default CardScoringCard;