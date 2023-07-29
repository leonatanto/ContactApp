import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import CarouselItem from './partials/CarouselItem';
import {ImageURISource} from 'react-native';

interface CarouselItem {
  src: ImageURISource;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const OnBoarding: React.FC = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const paginationRef = useRef(null);
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([
    {src: require('@images/carousel-image-1.png')},
    {src: require('@images/carousel-image-2.png')},
    {src: require('@images/carousel-image-3.png')},
  ]);

  const renderItem = ({item}: {item: CarouselItem}) => {
    return <CarouselItem src={item.src} index={activeIndex} />;
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (carouselRef.current) {
        if (activeIndex === carouselItems.length - 1) {
          carouselRef.current.snapToItem(0, true);
        } else {
          carouselRef.current.snapToNext(true);
        }
      }
    }, 3000);

    return () => clearInterval(autoSlide); //for cleanup
  }, [activeIndex, carouselItems.length]);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        layout="default"
        data={carouselItems}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />

      <Pagination
        ref={paginationRef}
        containerStyle={styles.pagination}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDot}
        dotsLength={3}
        activeDotIndex={activeIndex}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    backgroundColor: 'white',
    width: SCREEN_WIDTH / 1.5,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#EB6937',
  },
  container: {
    backgroundColor: '#EB6937',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  descContainer: {
    width: 250,
  },
  dotStyle: {
    width: 30,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#dbdbdb',
  },
  inactiveDot: {
    width: 10,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#dbdbdb',
  },
  pagination: {
    flex: 1,
    alignItems: 'flex-start',
  },
  slide: {
    marginTop: 50,
    width: SCREEN_WIDTH,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
  },
});
export default OnBoarding;
