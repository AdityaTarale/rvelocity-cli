import {LoginScreen} from '@/screens/unauthenticated/Login';
import {UnAuthenticatedStackNavigatorParamList} from '@/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator<UnAuthenticatedStackNavigatorParamList>();

export const UnAuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigator;
