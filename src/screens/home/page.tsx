import { View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";

export default function HomeScreen() {
    return (
        <View style={[{ backgroundColor: useThemeColor({}, 'background')}, styles.container]}>
            <Image style={styles.image} contentFit="cover" source={require('../../../assets/logo.svg')} />
        </View>
    )
}