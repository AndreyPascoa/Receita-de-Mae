import { View } from "react-native";
import { style } from "./style";
import { NavbarItem, NavbarProps } from "../../types/navbarType";

const Itens: NavbarItem[] = [
    { label: 'Home', route: 'Home', icon: 'home' },
    { label: 'Search', route: 'Categoria', icon: 'search' },
    { label: 'Profile', route: 'Favorito', icon: 'user' },
    { label: 'Profile', route: 'Lista', icon: 'user' },
]

export default function NavbarPage({} : NavbarProps) {
    return (
        <View style={style.container}>
            {Itens.map((item, index) => (
                <View key={index}>
                    {/* Render navbar item here */}
                </View>
            ))}
        </View>
    )
}