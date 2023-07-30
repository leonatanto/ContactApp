import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../helpers/globalStyle';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    email.includes('@')
      ? navigation.navigate('Pin', {email: email})
      : alert('Please using correct email!');
  };

  const [email, setEmail] = useState('');
  const isButtonDisabled = email === '';
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('@images/login-image.png')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('@images/icon.png')}
        />
        <Text style={[globalStyles.titleRegular, styles.titleText]}>
          Login via Email
        </Text>
        <TextInput
          style={[globalStyles.placeholderRegular, styles.input]}
          placeholder="tony@bangjamin.com"
          placeholderTextColor="#d3d3d3"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          disabled={isButtonDisabled}
          onPress={handleLogin}
          style={
            isButtonDisabled ? styles.disabledButton : styles.continueButton
          }>
          <Text style={styles.buttonText}>{'Continue '}</Text>
        </TouchableOpacity>

        <Text style={[globalStyles.placeholderRegular, styles.tncTextBlack]}>
          By clicking continue, you agree to our
          <Text style={[globalStyles.placeholderRegular, styles.tncTextOrange]}>
            {' Terms of Use '}
          </Text>
          and acknowledge that you have read our
          <Text style={[globalStyles.placeholderRegular, styles.tncTextOrange]}>
            {' Privacy Policy.'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {marginBottom: 15, fontSize: 20, color: '#0F0F0F'},
  buttonText: {color: 'white'},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  continueButton: {
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SCREEN_WIDTH - 30,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#EA5F2A',
  },
  disabledButton: {
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SCREEN_WIDTH - 30,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#d3d3d3',
  },
  image: {
    height: '100%',
    width: SCREEN_WIDTH,
  },
  icon: {height: 100, width: 100},
  input: {
    height: 40,
    borderColor: '#E3E3E3',
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10,
    color: '#757575',
  },
  inputContainer: {flex: 2, paddingHorizontal: 20},
  imageContainer: {flex: 3},
  tncTextBlack: {marginTop: 10, color: '#545454'},
  tncTextOrange: {color: '#EA5F2A'},
});

export default Login;
