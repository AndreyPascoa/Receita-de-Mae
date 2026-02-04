import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";
import { CardsType } from "../../types/cardsType";
import { FilterIcons } from "../../types/filterType";
import { categoryStyles, iconMap } from "../filter/page";
import { Bookmark, Heart } from "lucide-react-native";

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
                <View style={styles.featureIconsConatiner}>
                    <TouchableOpacity style={styles.featureIconButton}>
                        <Bookmark size={16} color={useThemeColor({}, "text")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconButton}>
                        <Heart size={16} color={useThemeColor({}, "text")} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}
