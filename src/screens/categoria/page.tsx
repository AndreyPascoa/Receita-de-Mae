import { Scroll } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { style } from "./style";

export default function CategoriaPage() {
    return (
        <ScrollView 
            style={style.container}
            contentContainerStyle={{ alignItems: 'center'}}
        >
            <View style={style.titleContainer}>
                <Text style={style.title}>Categoria</Text>
            </View>
        </ScrollView>
    )
}