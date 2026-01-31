import { ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";
import SearchComponent from "../../components/search/page";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardsComponent from "../../components/cards/page";

export default function HomeScreen() {

    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <SafeAreaProvider>
            <ScrollView 
                style={[{ backgroundColor: useThemeColor({}, 'background') }, styles.container]}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Image style={styles.image} contentFit="cover" source={require('../../../assets/logo.svg')} />

                {/* Search Component */}
                <SearchComponent onChangeText={(text: string) => setSearchQuery(text.toLowerCase())} />

                <CardsComponent />
            </ScrollView>
        </SafeAreaProvider>
    )
}