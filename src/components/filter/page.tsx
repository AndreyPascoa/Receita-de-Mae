import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FilterComponentProps, FilterType } from "../../types/filterType";
import { useThemeColor } from "../../hooks/useThemeColor";

export default function FilterComponent({ id, name, isPressed, onPress, icons } : FilterComponentProps) {

    const backgroundColor = isPressed ? useThemeColor({}, 'primary') : useThemeColor({}, 'secundary');
    const Icon = icons ? require('lucide-react-native/icons')[icons] : null;

    return (
        <TouchableOpacity 
            style={[styles.container, { backgroundColor }]} 
            id={id}
            onPress={onPress}
        >
            <Icon width={20} height={20} color={useThemeColor({}, 'text')} />
            <Text style={{ color: useThemeColor({}, 'text') }}>{name}</Text>
        </TouchableOpacity>
    )
}