import { Controller, useForm } from "react-hook-form";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import FeedbackTypeSelect, { FeedbackType } from "../components/FeedbackTypeSelect";


type FeedbackFormData = {
    name: string;
    email: string;
    feedback: FeedbackType;
    details: string;
};

const FeedbackScreen = () => {
    const { t } = useTranslation();

    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FeedbackFormData>({
        defaultValues: {
            name: "",
            email: "",
            feedback: undefined,
            details: "",
        },
    });

    const onSubmit = (data: FeedbackFormData) => {
        console.log("Feedback:", data);
    };

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background"
        >
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    className="flex-1"
                    contentContainerClassName="px-5 pb-8"
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="mt-4">
                        <Text className="text-base leading-6 text-muted-foreground">
                            {t("settings.feedback.description")}
                        </Text>
                    </View>

                    {/* Name */}

                    <View className="mt-6">
                        <Text className="mb-2 text-sm font-medium text-foreground">
                            {t("settings.feedback.name.label")}
                        </Text>

                        <TextInput
                            {...register("name", {
                                required: t("settings.feedback.name.required"),
                            })}
                            placeholder={t("settings.feedback.name.placeholder")}
                            placeholderTextColor="#64748b"
                            className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground"
                        />

                        {errors.name && (
                            <Text className="mt-1.5 text-xs text-red-500">
                                {errors.name.message}
                            </Text>
                        )}
                    </View>

                    {/* Email */}

                    <View className="mt-5">
                        <Text className="mb-2 text-sm font-medium text-foreground">
                            {t("settings.feedback.email.label")}
                        </Text>

                        <TextInput
                            {...register("email", {
                                required: t("settings.feedback.email.required"),
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: t("settings.feedback.email.invalid"),
                                },
                            })}
                            placeholder={t("settings.feedback.email.placeholder")}
                            placeholderTextColor="#64748b"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground"
                        />

                        {errors.email && (
                            <Text className="mt-1.5 text-xs text-red-500">
                                {errors.email.message}
                            </Text>
                        )}
                    </View>

                    {/* Feedback Type */}

                    <View className="mt-5">
                        <Controller
                            control={control}
                            name="feedback"
                            rules={{
                                required: t("settings.feedback.typeRequired"),
                            }}
                            render={({ field: { value, onChange } }) => (
                                <FeedbackTypeSelect
                                    value={value}
                                    onChange={onChange}
                                    error={errors.feedback?.message}
                                />
                            )}
                        />
                    </View>

                    {/* Details */}

                    <View className="mt-5">
                        <Text className="mb-2 text-sm font-medium text-foreground">
                            {t("settings.feedback.details.label")}
                        </Text>

                        <TextInput
                            {...register("details", {
                                required: t("settings.feedback.details.required"),
                            })}
                            placeholder={t("settings.feedback.details.placeholder")}
                            placeholderTextColor="#64748b"
                            multiline
                            textAlignVertical="top"
                            className="min-h-[140px] rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground"
                        />

                        {errors.details && (
                            <Text className="mt-1.5 text-xs text-red-500">
                                {errors.details.message}
                            </Text>
                        )}
                    </View>

                    {/* Send Button */}

                    <Pressable
                        onPress={handleSubmit(onSubmit)}
                        className="mt-6 items-center rounded-xl bg-primary px-4 py-4 active:opacity-80"
                    >
                        <Text className="text-sm font-semibold text-primary-foreground">
                            {t("settings.feedback.submit")}
                        </Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default FeedbackScreen;
