import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { styles } from "./style";
import { SearchType } from "../../types/searchType";

export default function SearchComponent({onChangeText}: SearchType) {
    return (
        <View style={[{backgroundColor: useThemeColor({}, 'secundary')}, styles.container]}>
            <Search color={useThemeColor({} , 'primary')}/>
            <TextInput 
                style={[styles.input, {color: useThemeColor({}, 'text')}]} 
                onChangeText={onChangeText}
                cursorColor={useThemeColor({}, 'primary')}
                placeholderTextColor={useThemeColor({}, 'text')}
                placeholder="Search..."
                selectionColor={useThemeColor({}, 'primary')}
            />
        </View>
    )
}