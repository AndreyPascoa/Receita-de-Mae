import { Text, View } from "react-native";
import { styles } from "./style";
import { CardProps } from "../../types/cardsType";
import { Clock } from "lucide-react-native";

export function CardsComponent({ id, title, time, servings }: CardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} />

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>

                <View style={styles.descriptionContainer}>
                    <Clock size={14} color="#E07A5F" />
                    <Text style={styles.description}>
                        {time} • {servings} Porç{Number(servings) > 1 ? 'ões' : 'ão'}
                    </Text>
                </View>
            </View>
        </View>
    )
}
