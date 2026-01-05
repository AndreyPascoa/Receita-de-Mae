import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: dimension.height * 0.06,
        maxHeight: dimension.height * 0.08,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fefcfa',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 5,
    },
    description: {
        color: '#45403fff',
        fontSize: 12,
        fontFamily: 'Inter',
    }
})