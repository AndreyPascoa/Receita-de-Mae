import { styles } from "./styles";
import { useThemeColor } from "../../hooks/useThemeColor";
import { BlurView } from "expo-blur";
import { RootStackParamList } from "../../types/rootStackType";
import * as icons from 'lucide-react-native/icons'
import { Text, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";

export default function NavBarComponent() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute();

    type NavItemIcon = {
        icon: keyof typeof icons,
        params?: any,
    }

    const navItens: Record<keyof RootStackParamList, NavItemIcon> = {
        Home: { icon: 'House' },
        Favorites: { icon: 'Heart' },
        Profile: { icon: 'User', params: { userId: '' }},
    }

    function navigateTo(screen: keyof RootStackParamList) {
        navigation.navigate(screen, navItens[screen].params);
    }

    return (
        <BlurView style={styles.container}>
            {
                (Object.keys(navItens) as (keyof RootStackParamList)[]).map((item) => {
                    const Icon = icons[navItens[item].icon];
                    const Color = useThemeColor({}, "icons");
                    return (
                        <TouchableOpacity 
                            key={item} onPress={() => navigateTo(item)} 
                            style={[styles.button, { 
                                opacity: route.name === item ? 1 : 0.5,
                            }]}
                        >
                            <Icon color={Color} width={24} height={24} />
                            <Text style={[styles.text, { color: Color }]}>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </BlurView>
    )
}