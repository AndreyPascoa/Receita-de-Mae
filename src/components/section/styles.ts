import { Dimensions, StyleSheet } from "react-native"

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
    descriptionContainer: {
        width: dimensions.width * 0.9,
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    descriptions: {
        fontSize: 14,
        margin: 5,
    },
    contentContainer: {
        marginTop: 10,
        gap: 10,
        flexDirection: 'row',
        paddingBottom: 10,
    },
})