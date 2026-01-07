import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { NavbarItem } from "../../types/navbarType";
import { Heart, House, List, MessageSquare } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const Itens: NavbarItem[] = [
    { label: 'Home', route: 'Home', icon: House },
    { label: 'Categoria', route: 'Categoria', icon: MessageSquare },
    { label: 'Favoritos', route: 'Favorito', icon: Heart },
    { label: 'Lista', route: 'Lista', icon: List },
]

export default function NavbarPage() {

    const navigate = useNavigation();    

    function handleNavigation(route: string) {
        navigate.navigate(route as never);
    }

    return (
        <View style={style.container}>
            {Itens.map((item, index) => {
                const Icon = item.icon;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate.navigate(item.route as never)}
                        style={style.button}
                        activeOpacity={0.7}
                    >
                        <Icon
                            size={22}
                            color={'#8C7B6B'}
                        />

                        <Text
                            style={[
                                style.description
                            ]}
                        >
                            {item.label}
                        </Text>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}