import { ScrollView, Text, View } from "react-native";
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
        <ScrollView 
            style={style.container}
            contentContainerStyle={{ alignItems: 'center'}}
        >
            <View style={style.titleContainer}>
                <Text style={style.title}>Receita de Mãe</Text>
            </View>

            <View style={style.searchContainer}>
                <SearchPage />
            </View>

            <View style={style.buttonContainer}>
                {listButton.map((item) => (
                    <ButtonPage
                        key={item.value}
                        {...item}
                        onPress={() => setCategory(item.value === category ? undefined : item.value)}
                    />
                ))}
            </View>


            <View style={style.foodRecipeContainer}>
                <Text style={style.subtitle}>Receitas em Destaque</Text>

                {
                    filterData.map((item) => (
                        <CardsComponent key={item.id} {...item} />
                    ))
                }
            </View>
        </ScrollView>
    )
}