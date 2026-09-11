import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import PrivacyPolicyContact from "../components/PrivacyPolicyContact";
import PrivacyPolicyHeader from "../components/PrivacyPolicyHeader";
import PrivacyPolicySection from "../components/PrivacyPolicySection";

const PrivacyPolicyScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className="flex-1 bg-background"
        >
            <ScrollView
                className="flex-1"
                contentContainerClassName="px-5 pb-10"
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}

                <View className="mt-6">
                    <PrivacyPolicyHeader />
                </View>

                {/* Introduction */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.introduction.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.introduction.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.introduction.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Information We Collect */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.collection.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.collection.description")}
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        {t("settings.privacyPolicy.collection.game.title")}
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.collection.game.description")}
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        {t("settings.privacyPolicy.collection.feedback.title")}
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.collection.feedback.description")}
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        {t("settings.privacyPolicy.collection.preferences.title")}
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.collection.preferences.description")}
                    </Text>
                </PrivacyPolicySection>

                {/* How We Use Information */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.usage.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.usage.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.usage.description2")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.usage.description3")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.usage.description4")}
                    </Text>
                </PrivacyPolicySection>

                {/* Local Storage */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.storage.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.storage.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.storage.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Feedback */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.feedback.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.feedback.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.feedback.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Data Sharing */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.sharing.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.sharing.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.sharing.description2")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.sharing.description3")}
                    </Text>
                </PrivacyPolicySection>

                {/* Third Party Services */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.thirdParty.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.thirdParty.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.thirdParty.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Data Security */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.security.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.security.description")}
                    </Text>
                </PrivacyPolicySection>

                {/* Children's Privacy */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.children.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.children.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.children.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Your Choices */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.choices.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.choices.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.choices.description2")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.choices.description3")}
                    </Text>
                </PrivacyPolicySection>

                {/* Changes */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.changes.title")}>
                    <Text className="text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.changes.description1")}
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        {t("settings.privacyPolicy.changes.description2")}
                    </Text>
                </PrivacyPolicySection>

                {/* Contact */}

                <PrivacyPolicySection title={t("settings.privacyPolicy.contact")}>
                    <PrivacyPolicyContact />
                </PrivacyPolicySection>

                {/* Footer */}

                <View className="mt-8 items-center">
                    <Text className="text-xs text-muted-foreground">
                        © 2026 Hazaro
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicyScreen;
