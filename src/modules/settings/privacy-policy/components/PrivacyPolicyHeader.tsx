import { ShieldCheck } from "lucide-react-native";
import { Text, View } from "react-native";

import { useThemeColors } from "@/hooks/useThemeColors";

const PrivacyPolicyHeader = () => {
    const colors = useThemeColors();

    return (
        <View className="items-center">
            <View className="h-16 w-16 items-center justify-center rounded-2xl bg-primary/5">
                <ShieldCheck size={30} color={colors.primary} />
            </View>

            <Text className="mt-4 text-2xl font-bold text-foreground">
                Privacy Policy
            </Text>

            <Text className="mt-2 text-xs text-muted-foreground">
                Last updated: September 5, 2026
            </Text>
        </View>
    );
};

export default PrivacyPolicyHeader;