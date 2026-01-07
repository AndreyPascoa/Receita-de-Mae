import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5F1',
    },
    titleContainer: {
        marginTop: 60,
        marginBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        color: '#4A3F35',
        fontFamily: 'DancingScript',
        letterSpacing: 1,
    },
    searchContainer: {
        margin: 10
    },
    subtitle: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 10,
        color: '#4A3F35',
        width: '80%',
    },
    foodRecipeContainer: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})