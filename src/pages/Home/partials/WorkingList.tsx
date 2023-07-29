import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../helpers/globalStyle';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const WorkingList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={[globalStyles.placeholderRegular, styles.invitationText]}>
        Ruang Kerja
      </Text>
      <Text style={[globalStyles.placeholderRegular, styles.supportText]}>
        Cek status polis, klaim dan penarikan komisi
      </Text>
      <View style={styles.menuContainer}>
        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/selling.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Penjualan</Text>
        </View>

        <View style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/commission.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Tarik Komisi</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={styles.menuImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.menuImage}
            source={require('@images/customer.png')}
          />
          <Text style={globalStyles.placeholderRegular}>Nasabah</Text>
        </TouchableOpacity>
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

export default WorkingList;
