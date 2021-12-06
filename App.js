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
              backgroundColor: '#1E1D1D',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#6b0000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 50,
            },
            title: 'Home Page',
          }}
        />
      </Stack.Navigator>
    </Navigation>
  );
}
 