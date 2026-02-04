import { styles } from "./styles";
import { useThemeColor } from "../../hooks/useThemeColor";
import { BlurView } from "expo-blur";
import { RootStackParamList } from "../../types/rootStackType";
import * as icons from 'lucide-react-native/icons'
import { Text, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function NavBarComponent() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentRoute, setCurrentRoute] = useState<string | undefined>("Home");

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (e) => {
            const routes = e.data?.state?.routes;
            const index = e.data?.state?.index;

            if (routes && index !== undefined) {
                const route = routes[index];
                setCurrentRoute(route.name);
            }
        });

        return unsubscribe;
    }, [navigation]);

    type NavItemIcon = {
        icon: keyof typeof icons,
        params?: any,
    }

    const navItens: Record<keyof RootStackParamList, NavItemIcon> = {
        Home: { icon: 'House' },
        Favorites: { icon: 'Heart' },
        Profile: { icon: 'User', params: { userId: '' } },
    }

    return (
        <BlurView intensity={100} tint="light" style={styles.container}>
            {(Object.keys(navItens) as (keyof RootStackParamList)[]).map((item) => {
                const Icon = icons[navItens[item].icon];
                const Color = useThemeColor({}, "icons");

                const isActive = currentRoute === item;

                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => navigation.navigate(item as any, navItens[item].params)}
                        style={[styles.button, { opacity: isActive ? 1 : 0.5 }]}
                    >
                        <Icon color={Color} width={24} height={24} />
                        <Text style={[styles.text, { color: Color }]}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </BlurView>
    );
}