import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: dimension.width * 0.8,
        padding: 5,
        margin: 10,
        borderRadius: 15,
        gap: 5,
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})