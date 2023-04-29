// ContactList.test.tsx
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ContactList from '../src/pages/ContactList'; // Adjust the path as per your project structure

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('<ContactList />', () => {
  it('renders correctly', () => {
    render(<ContactList />);
  });
});
