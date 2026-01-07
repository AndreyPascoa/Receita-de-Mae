import { Search } from "lucide-react-native";
import { useState } from "react"
import { TextInput, View } from "react-native";
import { style } from "./style";

export default function SearchPage() {

    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    }

    return (
        <View style={style.container}>
            <Search size={20} color="#8C7B6B" />
            <TextInput
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Buscar..."
                placeholderTextColor="#B5AFA8"
                style={{ flex: 1, fontSize: 16 }}
            />
        </View>
    )
}