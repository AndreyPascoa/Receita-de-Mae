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
            {Itens.map((item, index) => (
                <TouchableOpacity onPress={() => handleNavigation(item.route)} key={index} style={style.button}>
                    <item.icon color="#45403fff" size={24} />
                    <Text style={style.description}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}