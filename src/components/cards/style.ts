import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: dimensions.width * 0.5,
        height: dimensions.height * 0.35,
        borderRadius: 8,
        elevation: 1
    },
    iconContainer: {
        width: dimensions.width * 0.1,
        height: 24,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto'
    },
    descriptionContainer: {
        padding: 8,
        marginTop: 'auto',
        flex: 0.3,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    title: {
        fontSize: 14,
        marginBottom: 4,
    },
    iconFiltersContainer: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 'auto',
    },
    subtitle: {
        fontSize: 10,
        marginBottom: 4,
    },
    featureIconsConatiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 'auto',
        position: 'absolute',
        right: 8,
        bottom: 8,
        gap: 6,
    },
    featureIconButton: {
        padding: 4,
    }
})