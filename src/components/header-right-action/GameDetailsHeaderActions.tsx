import { useThemeColors } from "@/hooks/useThemeColors";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

type GameDetailsHeaderActionsProps = {
    onEdit: () => void;
    onDelete: () => void;
};

const GameDetailsHeaderActions = ({
    onEdit,
    onDelete,
}: GameDetailsHeaderActionsProps) => {
    const colors = useThemeColors();

    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleEdit = () => {
        setIsOpen(false);
        onEdit();
    };

    const handleDelete = () => {
        setIsOpen(false);
        onDelete();
    };

    return (
        <View className="relative">
            <Pressable
                accessibilityRole="button"
                accessibilityLabel="More actions"
                accessibilityState={{ expanded: isOpen }}
                onPress={() => setIsOpen((prev) => !prev)}
                className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                hitSlop={8}
            >
                <EllipsisVertical
                    size={22}
                    color={colors.foreground}
                />
            </Pressable>

            {isOpen && (
                <>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Close menu"
                        onPress={() => setIsOpen(false)}
                        className="absolute -left-[1000px] -top-[1000px] h-[2000px] w-[2000px]"
                    />

                    <View
                        className="absolute right-4 top-12 z-50 w-36 overflow-hidden rounded-xl border border-border bg-surface"
                        style={{
                            elevation: 5,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 6,
                        }}
                    >
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Edit game"
                            onPress={handleEdit}
                            className="px-4 py-3 active:bg-surface flex-row items-center gap-2"
                        >
                            <Pencil size={16} color={colors.foreground} />
                            <Text className="text-base text-foreground">
                                {t("gameDetails.headerActions.edit")}
                            </Text>
                        </Pressable>

                        <View className="h-px bg-border" />

                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Delete game"
                            onPress={handleDelete}
                            className="px-4 py-3 active:bg-surface flex-row items-center gap-2"
                        >
                            <Trash2 size={16} color={colors.danger} />
                            <Text className="text-base text-danger">
                                {t("gameDetails.headerActions.delete")}
                            </Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};

export default GameDetailsHeaderActions;