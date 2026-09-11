import {
    Info,
    Languages,
    MessageSquare,
    Moon,
    PlayCircle,
    Shield,
    Trophy,
} from "lucide-react-native";
import { SettingsSection } from "../components/tabs/settings/settings.config.type";

export const settingsConfig: SettingsSection[] = [
    {
        title: "settings.sections.appearance",
        data: [
            {
                id: "theme",
                title: "settings.items.theme.title",
                description: "settings.items.theme.description",
                route: "/settings/theme",
                icon: Moon,
            },
        ],
    },
    {
        title: "settings.sections.preferences",
        data: [
            {
                id: "language",
                title: "settings.items.language.title",
                description: "settings.items.language.description",
                route: "/settings/language",
                icon: Languages,
            },
        ],
    },
    {
        title: "settings.sections.game",
        data: [
            {
                id: "default-winning-score",
                title: "settings.items.defaultWinningScore.title",
                description: "settings.items.defaultWinningScore.description",
                route: "/settings/default-winning-score",
                icon: Trophy,
            },
            {
                id: "how-to-play",
                title: "settings.items.howToPlay.title",
                description: "settings.items.howToPlay.description",
                route: "/settings/how-to-play",
                icon: PlayCircle,
            },
        ],
    },
    {
        title: "settings.sections.about",
        data: [
            {
                id: "about",
                title: "settings.items.about.title",
                description: "settings.items.about.description",
                route: "/settings/about",
                icon: Info,
            },
            {
                id: "feedback",
                title: "settings.items.feedback.title",
                description: "settings.items.feedback.description",
                route: "/settings/feedback",
                icon: MessageSquare,
            },
            {
                id: "privacy-policy",
                title: "settings.items.privacyPolicy.title",
                description: "settings.items.privacyPolicy.description",
                route: "/settings/privacy-policy",
                icon: Shield,
            },
        ],
    },
];
