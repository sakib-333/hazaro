import { useThemeColors } from "@/hooks/useThemeColors";
import { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

type SectionHeaderProps = {
    icon: LucideIcon;
    title: string;
};

const SectionHeader = ({
    icon: Icon,
    title,
}: SectionHeaderProps) => {
    const colors = useThemeColors();

    return (
        <View className="flex-row items-center">
            <Icon
                size={18}
                color={colors.primary}
            />

            <Text className="ml-2 text-sm font-semibold text-muted-foreground">
                {title}
            </Text>
        </View>
    );
};

export default SectionHeader;   