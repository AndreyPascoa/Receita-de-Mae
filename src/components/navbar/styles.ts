import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        maxHeight: 60,
        height: dimensions.height * 0.1,
        width: dimensions.width,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 5,
        gap: 5
    },
    text: {
        fontSize: 12,
        marginTop: 4,
        fontFamily: 'Inter',
        fontWeight: '700',
    }
})