import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/home/page';

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <RootStack />
    </NavigationContainer>
  );
}