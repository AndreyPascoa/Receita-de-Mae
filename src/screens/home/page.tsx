import { Text, View } from "react-native";
import { CardsComponent } from "../../components/cards/page";
import { style } from "./style";

export function HomePage() {
    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}>Receita de Mãe</Text>
            </View>
        </View>
    )
}