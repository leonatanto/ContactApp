import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../helpers/globalStyle';
import QuickAccess from './partials/QuickAccess';
import Invitation from './partials/Invitation';
import ProductList from './partials/ProductList';
import WorkingList from './partials/WorkingList';
import {getHomeData} from '../../providers/api';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={[globalStyles.descriptionRegular, styles.bannerTitle]}>
            Halo Sahabat
            <Text style={[globalStyles.titleBold, styles.bannerTitle]}>
              {'\nBang Jamin,'}
            </Text>
            {'\nCari Cuan Yuk'}
          </Text>
          <Image
            resizeMode="contain"
            style={styles.homeBanner}
            source={require('@images/home-banner.png')}
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

        <View style={styles.workingContainer}>
          <WorkingList />
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
    backgroundColor: '#EA5F2A',
  },
  bottomContainer: {
    position: 'absolute',
    left: 0,
    top: '20%',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  supportText: {color: '#878787'},
  homeBanner: {height: 200, width: 200},
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
  secondMiddleBox: {
    top: '30%',
    width: SCREEN_WIDTH - 40,
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#F4F6F8',
    zIndex: 1,
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
  workingContainer: {
    top: '68%',
    width: SCREEN_WIDTH - 40,
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  boxText: {
    fontSize: 24,
    color: 'black',
  },
});

export default Home;
