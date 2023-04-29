import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../helpers/globalStyle';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ProductList: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={[globalStyles.placeholderRegular, styles.invitationText]}>
        Fitur Utama
      </Text>
      {/* <Text style={[globalStyles.placeholderRegular, styles.supportText]}>
        Pilih produk asuransi yang di butuhkan
      </Text> */}
      <View style={styles.menuContainer}>
        <TouchableOpacity   onPress={() => navigation.navigate('ContactList')} style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/phone-book.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Kontak</Text>
        </TouchableOpacity>

        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/star.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Rating</Text>
        </View>

       
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: SCREEN_WIDTH - 50,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  menuImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 80,
  },
  menuImage: {height: 30, width: 30, marginBottom: 10},
});

export default ProductList;
