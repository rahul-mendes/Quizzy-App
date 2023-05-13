import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CourseScreen from '../screens/CourseScreen';
import Course1 from '../screens/Course1';
import Course2 from '../screens/Course2';
import Course3 from '../screens/Course3';
import Course4 from '../screens/Course4';
import Course5 from '../screens/Course5';
import Results from '../screens/Results';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Welcome!',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Courses" component={CourseScreen} options={{
          title: 'Course Home',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Course1" component={Course1} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Course2" component={Course2} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Course3" component={Course3} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Course4" component={Course4} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Course5" component={Course5} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Results" component={Results} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fec625',
          },
          headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}