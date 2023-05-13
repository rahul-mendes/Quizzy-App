import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          title: 'Welcome!',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Sign In" component={SignInScreen} options={{
            title: 'Sign In',
            headerStyle: {
              backgroundColor: '#fec625',
            },
            headerTintColor: '#fff',
          }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#fec625',
            },
            headerTintColor: '#fff',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}