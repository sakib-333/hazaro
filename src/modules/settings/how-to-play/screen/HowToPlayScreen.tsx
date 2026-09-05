import { Calculator, Crown, Info, Users } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardScoringCard from "../components/CardScoringCard";
import GameOverviewCard from "../components/GameOverviewCard";
import SectionHeader from "../components/SectionHeader";
import WinningGameCard from "../components/WinningGameCard";


const HowToPlayScreen = () => {
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
                        Learn how scoring works and how to win a game of
                        Hazaro.
                    </Text>
                </View>

                {/* Game Overview */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Users}
                        title="Game Overview"
                    />

                    <GameOverviewCard />
                </View>

                {/* Card Scoring */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Calculator}
                        title="Card Scoring"
                    />

                    <CardScoringCard />
                </View>

                {/* Round Scoring */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Info}
                        title="Round Scoring"
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
                                    Record scores after each round
                                </Text>

                                <Text className="mt-1 text-sm leading-5 text-muted-foreground text-justify">
                                    After every round, enter the score earned
                                    by each player. The scores are added to
                                    each player&apos;s running total throughout
                                    the game.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Winning */}
                <View className="mt-6">
                    <SectionHeader
                        icon={Crown}
                        title="Winning the Game"
                    />

                    <WinningGameCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HowToPlayScreen;