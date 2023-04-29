import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../helpers/globalStyle';
import QuickAccess from './partials/QuickAccess';
import Invitation from './partials/Invitation';
import ProductList from './partials/ProductList';

const SCREEN_WIDTH = Dimensions.get('window').width;

function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={[globalStyles.descriptionRegular, styles.bannerTitle]}>
            Halo
            <Text style={[globalStyles.titleBold, styles.bannerTitle]}>
              {'\nJaminson,'}
            </Text>
            {'\nSelamat datang:)'}
          </Text>
          <Image
            resizeMode="contain"
            style={styles.homeBanner}
            source={require('@images/contact-information.png')}
          />
        </View>
        <View style={styles.bottomContainer} />

        <View style={[styles.middleContainer]}>
          <QuickAccess />
        </View>

        <Invitation />

        <View style={styles.productContainer}>
          <ProductList />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bannerTitle: {
    marginLeft: 30,
    width: 150,
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    top: 0,
    bottom: '80%',
    right: 0,
    backgroundColor: '#0686FC',
  },
  bottomContainer: {
    position: 'absolute',
    left: 0,
    top: '20%',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  homeBanner: {height: 60, width: 60, marginRight: 30},
  image: {height: 30, width: 30},
  middleContainer: {
    top: '15%',
    width: SCREEN_WIDTH - 40,
    borderRadius: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'white',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productContainer: {
    top: '45%',
    width: SCREEN_WIDTH - 40,
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
  },
});

export default Home;
