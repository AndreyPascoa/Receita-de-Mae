import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";
import { CardsType, FilterIcons } from "../../types/cardsType";
import * as LucideIcons from "lucide-react-native";

const categoryStyles: Record<FilterIcons, { bg: string; iconColor: string }> = {
    Beef: { bg: "#FFE2E2", iconColor: "#FF4D4D" },
    Bird: { bg: "#E2F5FF", iconColor: "#3B82F6" },
    Fish: { bg: "#E2FFE9", iconColor: "#22C55E" },
    Leaf: { bg: "#F3FFE2", iconColor: "#84CC16" },
};

const iconMap: Record<FilterIcons, any> = {
    Beef: LucideIcons.Beef,
    Bird: LucideIcons.Bird,
    Fish: LucideIcons.Fish,
    Leaf: LucideIcons.Leaf,
};

export default function CardsComponent({ title, id, iconsFilters }: CardsType) {

    const IconsComponent = ({ iconName }: { iconName: FilterIcons }) => {
        const Icon = iconMap[iconName];
        const category = categoryStyles[iconName];

        return (
            <View style={[styles.iconContainer, { backgroundColor: category.bg }]}>
                <Icon size={16} color={category.iconColor ?? useThemeColor({}, "text")} />
            </View>
        );
    };

    return (
        <TouchableOpacity id={id} style={[styles.container, { backgroundColor: useThemeColor({}, "primary") }]}>
            <View style={[styles.descriptionContainer, { backgroundColor: useThemeColor({}, "secundary") }]}>
                <Text style={[styles.title, { color: useThemeColor({}, "text") }]}>{title}</Text>
                <Text style={[styles.subtitle, { color: useThemeColor({}, "text") }]}>Andrey Pascoa</Text>
                <View style={styles.iconFiltersContainer}>
                    {iconsFilters.map((icon, index) => (
                        <IconsComponent key={index} iconName={icon} />
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
}
