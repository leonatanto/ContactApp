import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../../helpers/globalStyle';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ProductList: React.FC = () => {
  return (
    <>
      <Text style={[globalStyles.placeholderRegular, styles.invitationText]}>
        Produk Asuransi
      </Text>
      <Text style={[globalStyles.placeholderRegular, styles.supportText]}>
        Pilih produk asuransi yang di butuhkan
      </Text>
      <View style={styles.menuContainer}>
        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/car-menu.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Mobil</Text>
        </View>

        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/motorcycle.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Motor</Text>
        </View>

        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/truck.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Mobil</Text>
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
    justifyContent: 'space-between',
  },
  menuImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {height: 50, width: 50},
});

export default ProductList;
