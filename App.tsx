import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;