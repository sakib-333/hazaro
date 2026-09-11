import type { LucideIcon } from "lucide-react-native";

export type SettingsItem = {
    id: string;
    title: string;
    description?: string;
    route?: string;
    icon: LucideIcon;
};

export type SettingsSection = {
    title: string;
    data: SettingsItem[];
};