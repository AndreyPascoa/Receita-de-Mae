import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useThemeColor } from "../../hooks/useThemeColor";
import * as LucideIcons from 'lucide-react-native/icons'
import { FilterComponentProps, FilterIcons } from "../../types/filterType";

export const iconMap: Record<FilterIcons, any> = {
    Beef: LucideIcons.Beef,
    Bird: LucideIcons.Bird,
    Fish: LucideIcons.Fish,
    Leaf: LucideIcons.Leaf,
}

export const categoryStyles: Record<FilterIcons, { bg: string; iconColor: string }> = {
    Beef: { bg: "#FFE2E2", iconColor: "#FF4D4D" },
    Bird: { bg: "#E2F5FF", iconColor: "#3B82F6" },
    Fish: { bg: "#E2FFE9", iconColor: "#22C55E" },
    Leaf: { bg: "#F3FFE2", iconColor: "#84CC16" },
};

export default function FilterComponent({ id, name, isPressed, onPress, icons } : FilterComponentProps) {

    const Icon = iconMap[icons];
    const category = categoryStyles[icons];

    return (
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: isPressed ? category.bg : useThemeColor({}, 'secundary') }]} 
            id={id}
            onPress={onPress}
        >
            <Icon width={20} height={20} color={isPressed ? category.iconColor : useThemeColor({}, "text")} />
            <Text style={{ color: isPressed ? category.iconColor : useThemeColor({}, "text") }}>{name}</Text>
        </TouchableOpacity>
    )
}