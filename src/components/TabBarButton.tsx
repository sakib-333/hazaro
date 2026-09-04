import { BottomTabBarButtonProps } from "expo-router/build/react-navigation/bottom-tabs";
import { Pressable, StyleSheet } from "react-native";

const TabBarButton = ({
    children,
    onPress,
    onLongPress,
    accessibilityState,
    accessibilityLabel,
    testID,
}: BottomTabBarButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityState={accessibilityState}
            accessibilityLabel={accessibilityLabel}
            testID={testID}
            style={styles.container}
        >
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
});

export default TabBarButton;