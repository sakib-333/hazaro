import { ReactNode } from "react";
import { Text, View } from "react-native";

type PrivacyPolicySectionProps = {
    title: string;
    children: ReactNode;
};

const PrivacyPolicySection = ({
    title,
    children,
}: PrivacyPolicySectionProps) => {
    return (
        <View className="mt-7">
            <Text className="text-base font-bold text-foreground">
                {title}
            </Text>

            <View className="mt-2">
                {children}
            </View>
        </View>
    );
};

export default PrivacyPolicySection;