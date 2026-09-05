import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrivacyPolicyContact from "../components/PrivacyPolicyContact";
import PrivacyPolicyHeader from "../components/PrivacyPolicyHeader";
import PrivacyPolicySection from "../components/PrivacyPolicySection";

const PrivacyPolicyScreen = () => {
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

                <PrivacyPolicySection title="Introduction">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Hazaro is a score tracking app designed to help
                        players keep track of games, rounds, and scores.
                        We respect your privacy and aim to keep the
                        information handled by the app limited to what is
                        needed to provide its features.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        This Privacy Policy explains what information
                        Hazaro handles, how that information is used, where
                        it is stored, and the choices available to you.
                    </Text>
                </PrivacyPolicySection>

                {/* Information We Collect */}

                <PrivacyPolicySection title="Information We Collect">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Hazaro may handle information that you enter while
                        using the app.
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        Game Information
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        When you create and manage a game, the app may store
                        the game name, player names, player scores, round
                        information, game creation and update times, and
                        the winning score configured for the game.
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        Feedback Information
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        When you use the Feedback feature, you may provide
                        your name, email address, feedback type, and feedback
                        details.
                    </Text>

                    <Text className="mt-4 text-sm font-semibold text-foreground">
                        App Preferences
                    </Text>

                    <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                        Hazaro may store app preferences such as your
                        selected theme and language so that the app can
                        provide the experience you selected.
                    </Text>
                </PrivacyPolicySection>

                {/* How We Use Information */}

                <PrivacyPolicySection title="How We Use Your Information">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Information handled by Hazaro is used to provide the
                        features of the app.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        Game information is used to create games, maintain
                        player information, record round scores, calculate
                        running totals, determine when a player reaches the
                        configured winning score, and display game history.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        Feedback information is used to understand your
                        comments, identify problems, consider feature
                        requests, and improve Hazaro.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        App preferences are used to remember choices such as
                        your preferred language and theme.
                    </Text>
                </PrivacyPolicySection>

                {/* Local Storage */}

                <PrivacyPolicySection title="Data Storage">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Game-related information and app preferences are
                        stored locally on your device using the app's local
                        storage. This allows Hazaro to retain your games,
                        scores, history, and selected preferences when you
                        continue using the app.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        Locally stored game information remains on your
                        device unless you delete it through the features
                        provided by the app or remove the app from your
                        device.
                    </Text>
                </PrivacyPolicySection>

                {/* Feedback */}

                <PrivacyPolicySection title="Feedback">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        If you submit feedback through Hazaro, the
                        information you provide may be transmitted to the
                        service used to receive and process that feedback.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        Please avoid including passwords, payment
                        information, or other sensitive information in your
                        feedback.
                    </Text>
                </PrivacyPolicySection>

                {/* Data Sharing */}

                <PrivacyPolicySection title="Data Sharing">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Hazaro does not sell your personal information.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        Game information stored locally on your device is
                        not shared by Hazaro simply because you use the app.
                        Information that you voluntarily submit through
                        features such as feedback may be processed by the
                        service used to receive that submission.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        We may also disclose information when required to
                        comply with applicable law or to protect the
                        security, rights, or integrity of the app and its
                        users.
                    </Text>
                </PrivacyPolicySection>

                {/* Third Party Services */}

                <PrivacyPolicySection title="Third-Party Services">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Hazaro may use third-party services when they are
                        required to provide specific app functionality.
                        Information sent to such services is handled
                        according to the relevant service's privacy policy
                        and terms.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        We do not consider libraries used only to build the
                        application to be data-collecting services unless
                        they actually receive or process user information.
                    </Text>
                </PrivacyPolicySection>

                {/* Data Security */}

                <PrivacyPolicySection title="Data Security">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        We take reasonable measures to protect information
                        handled by Hazaro. However, no electronic storage
                        system or method of transmitting information can be
                        guaranteed to be completely secure.
                    </Text>
                </PrivacyPolicySection>

                {/* Children's Privacy */}

                <PrivacyPolicySection title="Children's Privacy">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        Hazaro is intended for general use and does not
                        intentionally collect personal information from
                        children for purposes that require parental consent.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        If you believe that a child has provided personal
                        information through a feature of Hazaro, please
                        contact us so that we can review the situation and
                        take appropriate action.
                    </Text>
                </PrivacyPolicySection>

                {/* Your Choices */}

                <PrivacyPolicySection title="Your Choices">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        You can manage the game information stored by Hazaro
                        using the game's available management and deletion
                        features.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        You can also choose whether to provide information
                        when using features such as feedback. Information
                        required by a particular feature may be necessary to
                        use that feature.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        If you have questions about information submitted
                        through the app, you can contact us using the
                        contact information provided below.
                    </Text>
                </PrivacyPolicySection>

                {/* Changes */}

                <PrivacyPolicySection title="Changes to This Privacy Policy">
                    <Text className="text-sm leading-6 text-muted-foreground">
                        We may update this Privacy Policy when Hazaro's
                        features, data handling practices, or applicable
                        requirements change.
                    </Text>

                    <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                        When the policy is updated, the revised version will
                        be made available within the app and the "Last
                        updated" date will be changed accordingly.
                    </Text>
                </PrivacyPolicySection>

                {/* Contact */}

                <PrivacyPolicySection title="Contact Us">
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