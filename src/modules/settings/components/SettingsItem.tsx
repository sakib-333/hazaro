import { ChevronRight } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type SettingsItemProps = {
    title: string;
    description?: string;
    icon: React.ComponentType<{
        size?: number;
        color?: string;
    }>;
    onPress?: () => void;
};

const SettingsItem = ({
    title,
    description,
    icon: Icon,
    onPress,
}: SettingsItemProps) => {
    return (
        <Pressable
            onPress={onPress}
            className="mb-2 flex-row items-center rounded-2xl border border-border bg-surface px-4 py-3 active:opacity-70"
        >
            <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                <Icon size={20} color="#2563eb" />
            </View>

            <View className="flex-1">
                <Text className="text-base font-semibold text-foreground">
                    {title}
                </Text>

                {description && (
                    <Text className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </Text>
                )}
            </View>

            <ChevronRight
                size={20}
                className="ml-3 text-muted-foreground"
            />
        </Pressable>
    );
};

export default SettingsItem;