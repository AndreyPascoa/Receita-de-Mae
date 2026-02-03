import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/home/page';
import SplashComponent from './src/services/splash/page';
import { useState } from 'react';
import { RootStackParamList } from './src/types/rootStackType';
import ProfileScreen from './src/screens/profile/page';
import FavoriteScreen from './src/screens/favorite/page';
import NavBarComponent from './src/components/navbar/page';
import MainLayout from './src/layout/main/page';

export default function App() {

  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [splashComplete, setSplashComplete] = useState<boolean>(false);

  const [loaded, error] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript-Medium.ttf'),
    'Inter': require('./assets/fonts/Inter_18pt-Medium.ttf'),
  })

  if (!loaded)
    return null;

  const SpalshAnimation = () => (
    splashComplete
      ?
      <MainLayout>
        <HomeScreen />
      </MainLayout>
      : <SplashComponent onComplete={setSplashComplete} />
  )

  function RootStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={SpalshAnimation} />
        <Stack.Screen name="Profile" component={() => (
          <MainLayout>
            <ProfileScreen />
          </MainLayout>
        )} />
        <Stack.Screen name="Favorites" component={() => (
            <MainLayout>
              <FavoriteScreen />
            </MainLayout>
          )} />
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