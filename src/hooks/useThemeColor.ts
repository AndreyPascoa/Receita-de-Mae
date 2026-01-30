import { useColorScheme } from "react-native";
import { Colors } from "../constants/Color";

export function useThemeColor(prop: { light?: string; dark?: string } = {}, colorName: keyof typeof Colors.light) {
    const theme = useColorScheme() || 'light';

    const colorFromProps = prop[theme];

    return colorFromProps ? colorFromProps : Colors[theme][colorName];
}