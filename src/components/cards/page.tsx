import { View } from "react-native";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";

export default function CardsComponent() {
    return (
        <View style={[styles.container, { backgroundColor: useThemeColor({}, "primary") }]}>
            
        </View>
    )
}