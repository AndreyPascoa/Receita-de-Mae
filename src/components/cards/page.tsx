import { Dimensions, Text, View } from "react-native";
import { styles } from "./style";
import { CardProps } from "../../types/cardsType";
import { Clock } from "lucide-react-native/icons";
import { useState } from "react";

export function CardsComponent({ id, title, time, servings, imageUrl }: CardProps) {
    return (
        <View style={styles.container} id={id}>
            <View style={styles.imageContainer} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descriptionContainer}>
                <Clock size={14} color={'#E07A5F'}/>
                <Text style={styles.description}>{time} - {servings} Porç{Number(servings) > 1 ? 'ões' : 'ão'}</Text>
            </View>
        </View>
    )
}