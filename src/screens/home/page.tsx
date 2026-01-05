import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { CardProps } from "../../types/cardsType";
import { CardsComponent } from "../../components/cards/page";
import { useMemo, useState } from "react";
import { ButtonProps } from "../../types/buttonType";
import ButtonPage from "../../components/button/page";
import SearchPage from "../../components/search/page";

const listCards: CardProps[] = [
    {
        id: '1',
        title: 'Receita de Bolo de Cenoura',
        servings: '8',
        time: '45 min',
        categoryId: '1',
    },
    {
        id: '2',
        title: 'Receita Lasanha a Bolonhesa',
        servings: '10',
        time: '1 h 20 min',
        categoryId: '2',
    },
]

const listButton: ButtonProps[] = [
    { label: 'Café da Manhã', value: '1' },
    { label: 'Almoço', value: '2' },
    { label: 'Sobremesas', value: '3' },
    { label: 'Vegetariano', value: '4' },
]

export function HomePage() {

    const [category, setCategory] = useState<string>();

    const filterData = useMemo(() => {
        return listCards.filter(card => {
            if (category) {
                return card.categoryId === category;
            }
            return true;
        })
    }, [category]);

    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}>Receita de Mãe</Text>
            </View>

            <SearchPage />

            <FlatList
                data={listButton}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (<ButtonPage {...item} />)}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'center',
                }}
            />

            <FlatList
                data={filterData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardsComponent {...item} />}
            />
        </View>
    )
}