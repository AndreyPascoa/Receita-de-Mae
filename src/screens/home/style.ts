import { Dimensions, StatusBar, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 275,
        width: dimensions.width,
        backgroundColor: 'transparent',
    },
    containerFilter: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: dimensions.width * 0.9,
        marginTop: 10,
    },
})