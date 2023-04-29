// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactListPage from './src/pages/ContactList';
import AddContactPage from './src/pages/AddContact';
import DetailContactPage from './src/pages/DetailContact';
import SplashScreenPage from './src/pages/SplashScreen';
import HomePage from './src/pages/Home';
import {RecoilRoot} from 'recoil';

type RootStackParamList = {
  Home: undefined;
  ContactList: undefined;
  SplashScreen: undefined;
  AddContact: undefined;
  DetailContact: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen
            options={{headerShown: false}}
            name="SplashScreen"
            component={SplashScreenPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomePage}
          />
          <Stack.Screen
            options={{title: 'ContactList'}}
            name="ContactList"
            component={ContactListPage}
          />
          <Stack.Screen
            options={{title: 'AddContact'}}
            name="AddContact"
            component={AddContactPage}
          />
          <Stack.Screen
            options={{title: 'DetailContact'}}
            name="DetailContact"
            component={DetailContactPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
