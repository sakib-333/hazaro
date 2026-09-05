import { useThemeColors } from "@/hooks/useThemeColors";
import {
    BarChart3,
    Clock3,
    Gamepad2,
    Languages,
    Moon,
    Target,
} from "lucide-react-native";
import { Text, View } from "react-native";

const features = [
    {
        title: "Game Management",
        description: "Create and manage your Hazaro games.",
        icon: Gamepad2,
    },
    {
        title: "Round-by-Round Scoring",
        description: "Record each player's score after every round.",
        icon: BarChart3,
    },
    {
        title: "Automatic Score Tracking",
        description: "Keep track of player totals automatically.",
        icon: Clock3,
    },
    {
        title: "Custom Winning Score",
        description: "Choose the score required to win a game.",
        icon: Target,
    },
    {
        title: "Language Support",
        description: "Use Hazaro in English or Bangla.",
        icon: Languages,
    },
    {
        title: "Theme Support",
        description: "Choose between light, dark, or system theme.",
        icon: Moon,
    },
];

const FeatureList = () => {
    const colors = useThemeColors();

    return (
        <View className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
            {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                    <View
                        key={feature.title}
                        className={`flex-row items-center px-4 py-4 ${index !== features.length - 1
                                ? "border-b border-border"
                                : ""
                            }`}
                    >
                        <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                            <Icon
                                size={20}
                                color={colors.primary}
                            />
                        </View>

                        <View className="flex-1">
                            <Text className="text-base font-semibold text-foreground">
                                {feature.title}
                            </Text>

                            <Text className="mt-1 text-sm leading-5 text-muted-foreground">
                                {feature.description}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default FeatureList;