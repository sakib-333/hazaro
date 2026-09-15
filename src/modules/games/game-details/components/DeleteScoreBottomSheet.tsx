import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Trash2 } from 'lucide-react-native';
import { forwardRef, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

type DeleteScoreBottomSheetProps = {
    hasScores: boolean;
    onDeleteLastScore: () => void;
    onDeleteAllScores: () => void;
};

const DeleteScoreBottomSheet = forwardRef<
    BottomSheetModal,
    DeleteScoreBottomSheetProps
>(
    (
        {
            hasScores,
            onDeleteLastScore,
            onDeleteAllScores,
        },
        ref
    ) => {
        const colors = useThemeColors();

        const renderBackdrop = useCallback(
            (props: any) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    pressBehavior="close"
                />
            ),
            []
        );

        return (
            <BottomSheetModal
                ref={ref}
                enableDynamicSizing
                backdropComponent={renderBackdrop}
                backgroundStyle={{
                    backgroundColor: colors.background,
                }}
                handleIndicatorStyle={{
                    backgroundColor: colors.mutedForeground,
                }}
            >
                <BottomSheetView>
                    <View className="px-5 pb-7">
                        <Text className="mb-4 text-lg font-bold text-foreground">
                            Delete Scores
                        </Text>

                        <Pressable
                            accessibilityRole="button"
                            disabled={!hasScores}
                            onPress={onDeleteLastScore}
                            className="min-h-[52px] flex-row items-center gap-3 border-b border-border py-3"
                        >
                            <Trash2
                                size={19}
                                color={colors.danger}
                            />

                            <View className="flex-1">
                                <Text className="text-[15px] font-semibold text-danger">
                                    Delete last score
                                </Text>

                                <Text className="mt-0.5 text-[13px] text-muted-foreground">
                                    Remove the most recent round.
                                </Text>
                            </View>
                        </Pressable>

                        <Pressable
                            accessibilityRole="button"
                            disabled={!hasScores}
                            onPress={onDeleteAllScores}
                            className="min-h-[52px] flex-row items-center gap-3 py-3"
                        >
                            <Trash2
                                size={19}
                                color={colors.danger}
                            />

                            <View className="flex-1">
                                <Text className="text-[15px] font-semibold text-danger">
                                    Delete all scores
                                </Text>

                                <Text className="mt-0.5 text-[13px] text-muted-foreground">
                                    Remove the complete score history.
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        );
    }
);

DeleteScoreBottomSheet.displayName =
    'DeleteScoreBottomSheet';

export default DeleteScoreBottomSheet;