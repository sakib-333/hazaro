import { Calculator, Crown, Info, Users } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import CardScoringCard from "../components/CardScoringCard";
import GameOverviewCard from "../components/GameOverviewCard";
import SectionHeader from "../components/SectionHeader";
import WinningGameCard from "../components/WinningGameCard";


const HowToPlayScreen = () => {
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
                {/* Intro */}
                <View className="mt-4">
                    <Text className="text-base leading-6 text-muted-foreground">
                        {t("settings.howToPlay.description")}
                    </Text>
                </View>

                {/* Game Overview */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Users}
                        title={t("settings.howToPlay.sections.gameOverview")}
                    />

                    <GameOverviewCard />
                </View>

                {/* Card Scoring */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Calculator}
                        title={t("settings.howToPlay.sections.cardScoring")}
                    />

                    <CardScoringCard />
                </View>

                {/* Round Scoring */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Info}
                        title={t("settings.howToPlay.sections.roundScoring")}
                    />

                    <View className="mt-3 rounded-2xl border border-border bg-card p-4">
                        <View className="flex-row">
                            <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                                <Calculator
                                    size={20}
                                    color="#2563EB"
                                />
                            </View>

                            <View className="flex-1">
                                <Text className="text-base font-semibold text-foreground">
                                    {t("settings.howToPlay.round.title")}
                                </Text>

                                <Text className="mt-1 text-sm leading-5 text-muted-foreground text-justify">
                                    {t("settings.howToPlay.round.description")}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Winning */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Crown}
                        title={t("settings.howToPlay.sections.winning")}
                    />

                    <WinningGameCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HowToPlayScreen;
