import React from 'react';
import { NavigationContainer as Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Pages.MainPage}
          options={{
            headerStyle: {
              backgroundColor: '#606060',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#c9c9c9',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
            title: 'Streaming app',
          }}
        />
        <Stack.Screen
          name="About"
          component={Pages.AboutPage}
          options={{
            headerStyle: {
              backgroundColor: '#606060',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#c9c9c9',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
    </Navigation>
  );
}
 