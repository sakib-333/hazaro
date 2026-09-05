import { Check, ChevronDown } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export type FeedbackType =
    | "bug"
    | "feature"
    | "improvement"
    | "general";

type FeedbackTypeSelectProps = {
    value?: FeedbackType;
    onChange: (value: FeedbackType) => void;
    error?: string;
};

const feedbackTypes: {
    label: string;
    value: FeedbackType;
}[] = [
        {
            label: "Bug Report",
            value: "bug",
        },
        {
            label: "Feature Request",
            value: "feature",
        },
        {
            label: "Improvement",
            value: "improvement",
        },
        {
            label: "General Feedback",
            value: "general",
        },
    ];

const FeedbackTypeSelect = ({
    value,
    onChange,
    error,
}: FeedbackTypeSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedType = feedbackTypes.find(
        (item) => item.value === value
    );

    return (
        <View className="relative z-50">
            <Text className="mb-2 text-sm font-medium text-foreground">
                Feedback Type
            </Text>

            {/* Select Field */}

            <Pressable
                onPress={() => setIsOpen((prev) => !prev)}
                className="h-[50px] flex-row items-center justify-between rounded-xl border border-border bg-card px-4"
            >
                <Text
                    className={`text-sm ${selectedType
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                >
                    {selectedType?.label ?? "Select feedback type"}
                </Text>

                <ChevronDown
                    size={18}
                    className="text-muted-foreground"
                />
            </Pressable>

            {/* Dropdown */}

            {isOpen && (
                <View className="absolute left-0 right-0 top-[78px] z-[100] overflow-hidden rounded-xl border border-border bg-surface">
                    {feedbackTypes.map((item, index) => {
                        const isSelected = item.value === value;

                        return (
                            <Pressable
                                key={item.value}
                                onPress={() => {
                                    onChange(item.value);
                                    setIsOpen(false);
                                }}
                                className={`h-[48px] flex-row items-center justify-between px-4 ${index !== feedbackTypes.length - 1
                                        ? "border-b border-border"
                                        : ""
                                    }`}
                            >
                                <Text
                                    className={`text-sm ${isSelected
                                            ? "font-semibold text-primary"
                                            : "text-foreground"
                                        }`}
                                >
                                    {item.label}
                                </Text>

                                {isSelected && (
                                    <Check
                                        size={18}
                                        className="text-primary"
                                    />
                                )}
                            </Pressable>
                        );
                    })}
                </View>
            )}

            {error && (
                <Text className="mt-1.5 text-xs text-red-500">
                    {error}
                </Text>
            )}
        </View>
    );
};

export default FeedbackTypeSelect;