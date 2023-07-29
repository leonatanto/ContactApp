import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import globalStyles from '../helpers/globalStyle';
import {login} from '../../providers/api';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Pin: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const {email} = route.params;

  const focusNext = (index: number, value: number) => {
    setPin(pin.map((val, idx) => (idx === index ? value : val)));

    if (value && index !== 5) {
      inputs.current[index + 1].focus();
    }
  };

  const inputElements = pin.map((value, index) => (
    <TextInput
      key={index}
      ref={ref => (inputs.current[index] = ref)}
      style={styles.input}
      keyboardType="numeric"
      maxLength={1}
      onChangeText={value => focusNext(index, value)}
      value={value}
    />
  ));

  const handleContinue = () => {
    const pinString = pin.join('');
    console.log(email, 'aa', pinString);
    login(email, pinString);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('@images/icon.png')}
      />
      <Text style={[globalStyles.titleRegular, styles.title]}>
        Enter Bang Jamin PIN
      </Text>
      <Text style={[globalStyles.placeholderRegular, styles.email]}>
        {email}
      </Text>
      <View style={styles.inputContainer}>{inputElements}</View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>{'Continue '}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {color: 'white'},
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  continueButton: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SCREEN_WIDTH - 30,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#EA5F2A',
  },
  email: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {height: 100, width: 100},
  input: {
    width: 40,
    height: 40,
    color: 'black',
    borderRadius: 8,
    textAlign: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    margin: 5,
  },
  title: {
    color: '#0F0F0F',
    fontSize: 24,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Pin;
