import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: dimension.height * 0.28,
        width: dimension.width * 0.9,
        borderRadius: 16,
        marginVertical: 12,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        overflow: 'hidden',
    },
    imageContainer: {
        height: '55%',
        width: '100%',
        backgroundColor: '#F3E2D3',
        borderBottomWidth: 3,
        borderBottomColor: '#E07A5F',
    },
    content: {
        flex: 1,
        padding: 14,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#4A3F35',
        fontWeight: '600',
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 6,
    },
    description: {
        fontSize: 14,
        color: '#8C7B6B',
    },
});
