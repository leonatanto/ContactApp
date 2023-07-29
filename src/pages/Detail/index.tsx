import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet} from 'react-native';
import {View, Text, ActivityIndicator} from 'react-native';
import {getHomeData} from '../../providers/api';
import globalStyles from '../helpers/globalStyle';

const SCREEN_HEIGHT = Dimensions.get('window').height;

interface HomeData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Detail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [homeData, setHomeData] = useState<HomeData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getHomeData();
        setHomeData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}: {item: HomeData}) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: item.avatar}}
        />

        <View style={styles.textContainer}>
          <Text style={[globalStyles.placeholderRegular, styles.title]}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <Text style={[globalStyles.descriptionRegular, styles.title]}>
            {item.email}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {loading && (
        <>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0e9e18" />
          </View>

          <View style={styles.loaderBackground} />
        </>
      )}
      <View style={styles.container}>
        <FlatList renderItem={item => renderItem(item)} data={homeData} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  title: {
    color: '#0F0F0F',
  },
  textContainer: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  imageContainer: {flexDirection: 'row', padding: 15},
  image: {height: 50, width: 50},
  loader: {
    height: SCREEN_HEIGHT,
    zIndex: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: '80%',
    right: 0,
    justifyContent: 'center',
  },
  loaderBackground: {
    height: SCREEN_HEIGHT,
    opacity: 0.3,
    backgroundColor: '#d3d3d3',
    zIndex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
});

export default Detail;
