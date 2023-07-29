import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {apiDataAtom} from '../../providers/recoilStore';
import axios from 'axios';
import {HelpCircle} from 'lucide-react-native';

interface HomeData {
  name: string;
}

function HomePage() {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState<HomeData[]>([]);
  //const [data, setData] = useState<HomeData[]>([]);
  const [text, setText] = useState('');
  const [userId, setUserId] = useState('');

  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const {numberOfData, setNumberOfData} = useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${numberOfData}&offset=${0}`,
      );
      // console.log(response.data);
      setApiData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //(apiData)

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = useCallback(
    (text: string) => {
      setUserId(text);
      const newData = apiData.results
        .map(item => item)
        .filter(item => item.name.toLowerCase().includes(text.toLowerCase()));

      console.log(newData);
      setFilteredData(newData);
    },
    [apiData],
  );

  const handleEndReach = useCallback(async () => {
    console.log('end');
    setNumberOfData(numberOfData + 10);
    await fetchData();
  }, [fetchData, numberOfData, setNumberOfData]);

  const renderImage = item =>
    item.index === 0 ? null : (
      <View
        style={{
          backgroundColor: 'gray',
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          width={100}
          height={100}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.index}.png`,
          }}
        />
        <Text>{item.item.name}</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <Text>This is home page</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.button}>
        <HelpCircle color="black" width={30} height={30} />
        <Text>Button</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} onChangeText={e => filterData(e)} />
      <FlatList
        keyExtractor={item => item.name}
        numColumns={2}
        data={apiData.results}
        renderItem={renderImage}
        //onEndReached={() =>console.log('end')}
        //onEndReachedThreshold={0.01}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'pink',
  },
  input: {
    backgroundColor: '#d3d3d3',
  },
});
export default HomePage;
