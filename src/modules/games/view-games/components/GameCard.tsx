import { ChevronRight } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type GameCardProps = {
    name: string;
    createdAt: number;
    onPress?: () => void;
};

const GameCard = ({ name, createdAt, onPress }: GameCardProps) => {
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Pressable
            onPress={onPress}
            className="mb-3 rounded-2xl border border-border bg-card px-4 py-4 active:opacity-70"
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
                        Created {formattedDate}
                    </Text>
                </View>

                <View className="h-9 w-9 items-center justify-center rounded-full bg-muted">
                    <ChevronRight size={20} className="text-muted-foreground" />
                </View>
            </View>
        </Pressable>
    );
};

export default GameCard;