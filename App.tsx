import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomePage } from './src/screens/home/page';
import { NavigationContainer } from '@react-navigation/native';
import NavbarPage from './src/components/navbar/page';
import CategoriaPage from './src/screens/categoria/page';
import FavoritoPage from './src/screens/favorito/page';
import ListPage from './src/screens/lista/page';
import { useFonts } from 'expo-font';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [loaded, error] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript-Medium.ttf'),
    'Inter': require('./assets/fonts/Inter_18pt-Medium.ttf'),
  })

  if(!loaded)
    return null;

  function RootStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Categoria" component={CategoriaPage} />
        <Stack.Screen name="Favorito" component={FavoritoPage} />
        <Stack.Screen name="Lista" component={ListPage} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack />
      <NavbarPage />
    </NavigationContainer>
  );
}