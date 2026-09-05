import { useThemeColors } from "@/hooks/useThemeColors";
import { Calculator } from "lucide-react-native";
import { Text, View } from "react-native";

const AboutHeader = () => {
    const colors = useThemeColors();

    return (
        <View className="items-center">
            <View className="h-20 w-20 items-center justify-center rounded-3xl bg-primary/5">
                <Calculator size={38} color={colors.primary} />
            </View>

            <Text className="mt-4 text-2xl font-bold text-foreground">
                Hazaro
            </Text>

            <Text className="mt-1 text-sm font-medium text-muted-foreground">
                Version 1.0.0
            </Text>

            <Text className="mt-3 px-4 text-center text-sm leading-5 text-muted-foreground">
                A simple and convenient score tracking app for playing
                Hazaro with friends and family.
            </Text>
        </View>
    );
};

export default AboutHeader;