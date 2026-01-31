import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {   
        height: 45, 
        width: dimensions.width * 0.9,
        padding: 10,
        margin: 10,
        borderRadius: 50,
        flexDirection: 'row',
        gap: 10,
        elevation: 1
    },
    input: {
        backgroundColor: 'transparent',
        width: '85%',
        height: '100%',
        padding: 0,
        margin: 0,
        fontSize: 16,
    }
})