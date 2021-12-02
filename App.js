import React from 'react';
import { NavigationContainer as Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from './src/pages';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Pages.MainPage} />
      </Stack.Navigator>
    </Navigation>
  );
}
