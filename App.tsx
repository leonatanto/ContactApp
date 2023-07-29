// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/pages/Home';
import DetailPage from './src/pages/Detail';
import OnBoardingPage from './src/pages/OnBoarding';
import LoginPage from './src/pages/Login';
import PinPage from './src/pages/Pin';
import SplashScreenPage from './src/pages/SplashScreen';

import {RecoilRoot} from 'recoil';

type RootStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  Pin: {email: string};
  Home: undefined;
  Detail: undefined;
  SplashScreen: undefined;
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
            name="OnBoarding"
            component={OnBoardingPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Pin"
            component={PinPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomePage}
          />
          <Stack.Screen
            options={{title: 'Nasabah'}}
            name="Detail"
            component={DetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
