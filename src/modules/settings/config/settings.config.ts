import {
    Info,
    Languages,
    MessageSquare,
    Moon,
    PlayCircle,
    Shield,
    Trophy,
} from "lucide-react-native";
import { SettingsSection } from "../types/settings.config.type";

export const settingsConfig: SettingsSection[] = [
    {
        title: "Appearance",
        data: [
            {
                id: "theme",
                title: "Theme",
                description: "Choose light, dark, or system theme",
                route: "/settings/theme",
                icon: Moon,
            },
        ],
    },
    {
        title: "Preferences",
        data: [
            {
                id: "language",
                title: "Language",
                description: "Choose your preferred language",
                route: "/settings/language",
                icon: Languages,
            },
        ],
    },
    {
        title: "Game",
        data: [
            {
                id: "default-winning-score",
                title: "Default Winning Score",
                description: "Set the default score required to win",
                route: "/settings/default-winning-score",
                icon: Trophy,
            },
            {
                id: "how-to-play",
                title: "How to Play",
                description: "Learn how to play Hazari",
                route: "/settings/how-to-play",
                icon: PlayCircle,
            },
        ],
    },
    {
        title: "About",
        data: [
            {
                id: "about",
                title: "About Hazaro",
                description: "Learn more about Hazaro",
                route: "/settings/about",
                icon: Info,
            },
            {
                id: "feedback",
                title: "Feedback",
                description: "Share your feedback with us",
                route: "/settings/feedback",
                icon: MessageSquare,
            },
            {
                id: "privacy-policy",
                title: "Privacy Policy",
                description: "Read our privacy policy",
                route: "/settings/privacy-policy",
                icon: Shield,
            },
        ],
    },
];