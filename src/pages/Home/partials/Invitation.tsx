import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../../helpers/globalStyle';
const SCREEN_WIDTH = Dimensions.get('window').width;
const Invitation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('@images/support.png')}
      />
      <View style={styles.invitationTextContainer}>
        <Text style={[globalStyles.placeholderRegular, styles.invitationText]}>
          Yuk undang temanmu!
        </Text>
        <Text
          style={[
            globalStyles.placeholderRegular,
            styles.invitationSecondaryText,
          ]}>
          Untuk dapatkan free premium akses!
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('@images/plus.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  invitationTextContainer: {flexDirection: 'column'},
  invitationText: {color: 'black'},
  invitationSecondaryText: {color: '#878787'},
  image: {height: 30, width: 30},
});

export default Invitation;
