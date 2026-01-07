import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: dimension.height * 0.075,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EFE7DF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 8,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        flex: 1,
    },

    description: {
        fontSize: 11,
        color: '#8C7B6B',
        fontFamily: 'Inter',
    },

    descriptionActive: {
        color: '#E07A5F',
        fontWeight: '600',
    },

    activeDot: {
        marginTop: 4,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#E07A5F',
    },
});
