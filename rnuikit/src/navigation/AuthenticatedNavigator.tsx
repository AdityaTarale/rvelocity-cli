import {HomeScreen} from '@/screens/authenticated/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthenticatedStackNavigatorParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
