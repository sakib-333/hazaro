import { Info, Sparkles } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutHeader from "../components/AboutHeader";
import AppInfoCard from "../components/AppInfoCard";
import FeatureList from "../components/FeatureList";
import SectionHeader from "../components/SectionHeader";

const AboutScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className="flex-1 bg-background"
        >
            <ScrollView
                className="flex-1"
                contentContainerClassName="px-5 pb-8"
                showsVerticalScrollIndicator={false}
            >
                {/* App Header */}

                <View className="mt-6">
                    <AboutHeader />
                </View>

                {/* About Hazaro */}

                <View className="mt-8">
                    <SectionHeader
                        icon={Info}
                        title={t("settings.about.sections.about")}
                    />

                    <View className="mt-3 rounded-2xl border border-border bg-card p-4">
                        <Text className="text-sm leading-6 text-muted-foreground">
                            {t("settings.about.description")}
                        </Text>

                        <Text className="mt-3 text-sm leading-6 text-muted-foreground">
                            {t("settings.about.instructions")}
                        </Text>
                    </View>
                </View>

                {/* Features */}

                <View className="mt-8">
                    <SectionHeader
                        icon={Sparkles}
                        title={t("settings.about.sections.features")}
                    />

                    <FeatureList />
                </View>

                {/* App Information */}

                <View className="mt-8">
                    <SectionHeader
                        icon={Info}
                        title={t("settings.about.sections.appInformation")}
                    />

                    <AppInfoCard />
                </View>

                {/* Footer */}

                <View className="mt-8 items-center">
                    <Text className="text-xs text-muted-foreground">
                        {t("settings.about.footer")}
                    </Text>

                    <Text className="mt-1 text-xs text-muted-foreground">
                        © 2026 Hazaro
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutScreen;
