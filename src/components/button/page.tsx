import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../types/buttonType";
import { style } from "./style";

export default function ButtonPage({label, onPress} : ButtonProps) {
    return (
        <TouchableOpacity style={style.container}>
            <Text onPress={onPress} style={style.text}>{label}</Text>   
        </TouchableOpacity>
    )    
}