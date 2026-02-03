import { View } from "react-native";
import { styles } from "./styles";
import NavBarComponent from "../../components/navbar/page";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.contaner}>
            <View style={{ flex: 1 }}>
                {children}
            </View>

            {/* Navbar Component */}
            <NavBarComponent />
        </View>
    )
}