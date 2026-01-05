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
            <Search />
            <TextInput
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Buscar..."
            />
        </View>
    )
}