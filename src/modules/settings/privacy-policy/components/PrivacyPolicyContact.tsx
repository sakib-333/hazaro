import { Mail } from "lucide-react-native";
import { Linking, Pressable, Text, View } from "react-native";

import { useThemeColors } from "@/hooks/useThemeColors";

const PRIVACY_EMAIL = "sakib.cse.333@gmail.com";

const PrivacyPolicyContact = () => {
    const colors = useThemeColors();

    const handleContactPress = () => {
        Linking.openURL(`mailto:${PRIVACY_EMAIL}`);
    };

    return (
        <View className="mt-3 rounded-2xl border border-border bg-card p-4">
            <Text className="text-sm leading-6 text-muted-foreground">
                If you have questions about this Privacy Policy or how
                Hazaro handles your information, you can contact us.
            </Text>

            <Pressable
                onPress={handleContactPress}
                className="mt-4 flex-row items-center active:opacity-70"
            >
                <Mail size={18} color={colors.primary} />

                <Text className="ml-2 text-sm font-semibold text-primary">
                    {PRIVACY_EMAIL}
                </Text>
            </Pressable>
        </View>
    );
};

export default PrivacyPolicyContact;