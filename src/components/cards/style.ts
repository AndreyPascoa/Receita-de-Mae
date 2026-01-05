import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: dimension.height * 0.3,
        width: dimension.width * 0.9,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        backgroundColor: '#fdf8f4',
        elevation: 3,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#E07A5F',
        width: '100%',
    },
    descriptionContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 14,   
        color: '#6C757D',
        fontWeight: '400',
    }
})