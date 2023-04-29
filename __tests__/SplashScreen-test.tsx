// SplashScreen.test.tsx
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import SplashScreen from '../src/pages/SplashScreen'; // Adjust the path as per your project structure

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('<SplashScreen />', () => {
  it('renders correctly', () => {
    render(<SplashScreen />);
  });
});
