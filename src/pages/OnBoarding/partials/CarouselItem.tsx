import React from 'react';
import {
  Dimensions,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from '../../helpers/globalStyle';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface CarouselItemInterface {
  src: ImageURISource;
  index: number;
}

const CarouselItem: React.FC<CarouselItemInterface> = ({src, index}) => {
  const carouselTitle = (activeIndex: number) => {
    console.log(activeIndex, 'asda');
    switch (activeIndex) {
      case 0:
        return (
          <>
            <Text style={[globalStyles.titleBold, styles.text]}>
              Cuan Gak Pake Modal?
            </Text>
            <Text style={[globalStyles.descriptionRegular, styles.text]}>
              Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin
            </Text>
          </>
        );

      case 1:
        return (
          <>
            <Text style={[globalStyles.titleBold, styles.text]}>
              Banyak Sahabat Banyak Rejeki
            </Text>
            <Text style={[globalStyles.descriptionRegular, styles.text]}>
              Cari cuan makin kenceng dan seru bareng sahabat Bang Jamin
            </Text>
          </>
        );

      case 2:
        return (
          <>
            <Text style={[globalStyles.titleBold, styles.text]}>
              Gampang urus Klaim
            </Text>
            <Text style={[globalStyles.descriptionRegular, styles.text]}>
              Urus klaim cepet gak pake ribet
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.slide}>
      <Image source={src} style={styles.image} resizeMode="center" />
      <View style={styles.descContainer}>{carouselTitle(index)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  descContainer: {
    width: 250,
  },
  image: {width: 300, height: 300},
  slide: {
    marginTop: 30,
    width: SCREEN_WIDTH,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
});
export default CarouselItem;
