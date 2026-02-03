import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./style";
import { useThemeColor } from "../../hooks/useThemeColor";
import SearchComponent from "../../components/search/page";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardsComponent from "../../components/cards/page";
import NavBarComponent from "../../components/navbar/page";
import DividerComponent from "../../components/divider/page";
import FilterComponent from "../../components/filter/page";
import { FilterType } from "../../types/filterType";
import { Star } from "lucide-react-native";
import SectionComponent from "../../components/section/page";

export default function HomeScreen() {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filters, setFilters] = useState<FilterType[]>([
        { id: '1', name: 'Carnes', isPressed: false, icons: 'Beef' },
        { id: '2', name: 'Aves', isPressed: false, icons: 'Bird' },
        { id: '3', name: 'Peixes', isPressed: false, icons: 'Fish' },
        { id: '4', name: 'Vegetariano', isPressed: false, icons: 'Leaf' },
    ]);

    const handlePressFilter = (id: string) => {
        setFilters(prevFilters =>
            prevFilters.map(item =>
                item.id === id ? { ...item, isPressed: !item.isPressed } : item
            )
        );
    };

    return (
        <SafeAreaProvider>

            {/*Container Principal com Scroll*/}
            <ScrollView
                style={[{ backgroundColor: useThemeColor({}, 'background') }, styles.container]}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Image style={styles.image} contentFit="cover" source={require('../../../assets/logo.svg')} />

                {/* Search Component */}
                <SearchComponent onChangeText={(text: string) => setSearchQuery(text.toLowerCase())} />

                {/* Filter Component */}
                <View style={styles.containerFilter}>
                    {filters.map((item) => (
                        <FilterComponent key={item.id} id={item.id} name={item.name} isPressed={item.isPressed} onPress={() => handlePressFilter(item.id)} icons={item.icons} />
                    ))}
                </View>

                {/* Divider Component */}
                <DividerComponent />

                {/* Cards Component */}
                <SectionComponent id="1" title="Destaques">
                    <CardsComponent />
                </SectionComponent>
            </ScrollView>

            {/* Navbar Component */}
            <NavBarComponent />
        </SafeAreaProvider>
    )
}