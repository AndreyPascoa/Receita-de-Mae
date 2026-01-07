import { Dimensions, StyleSheet } from "react-native";

const dimension = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: dimension.width * 0.88,
        height: 48,
        paddingHorizontal: 16,
        marginVertical: 12,
        borderRadius: 14,
        gap: 8,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    }
})