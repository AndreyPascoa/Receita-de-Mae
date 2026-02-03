import { SectionType } from "../../types/sectionType";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { styles } from "./styles";

export default function SectionComponent({ id, title, children }: SectionType) {
    return (
         <View id={id} style={styles.descriptionContainer}>
            
            <View style={styles.textContainer}>
                <Text style={[styles.descriptions, { color: useThemeColor({}, 'text')}]}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.descriptions, { color: useThemeColor({}, 'button')}]}>
                        Ver todos!
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView 
                contentContainerStyle={styles.contentContainer} 
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </View>
    )
}