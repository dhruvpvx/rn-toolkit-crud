import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../screens';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
        <Stack.Screen name="AddUserScreen" component={Screens.AddUserScreen} />
        <Stack.Screen
          name="EditUserScreen"
          component={Screens.EditUserScreen}
        />
        <Stack.Screen
          name="UserDetailsScreen"
          component={Screens.UserDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
