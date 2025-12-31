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
        backgroundColor: '#f1f1f1',
        borderTopColor: '#45403fff',
        borderTopWidth: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 5,
    }
})