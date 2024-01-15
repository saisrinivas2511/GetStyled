import React from 'react';
import GetStartedScreen from '../Screens/GetStartedScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/LandingPage';
import UserLogin from '../Screens/UserLogin';
import UserSignUp from '../Screens/UserSignUp';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserSignUp" component={UserSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
