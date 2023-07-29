import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const QuickAccess: React.FC = () => {
  return (
    <>
      <View style={styles.quickAccess}>
        <View style={styles.imageQuickAccess}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('@images/pocket.png')}
          />
          <Text>IDR 0 Jt</Text>
        </View>
      </View>

      <View style={styles.quickAccessContainer}>
        <View style={styles.separator} />
        <View style={styles.quickAccess}>
          <View style={styles.imageQuickAccess}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('@images/point.png')}
            />
            <Text>0 Poin </Text>
          </View>
        </View>
      </View>

      <View style={styles.quickAccessContainer}>
        <View style={styles.separator} />
        <View style={styles.quickAccess}>
          {/* <Text style={styles.boxText}>B</Text> */}
          <View style={styles.imageQuickAccess}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('@images/people.png')}
            />
            <Text>0 Sahabat </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 100,
  },
  separator: {
    height: 40,
    marginRight: 15,
    borderRightColor: '#d3d3d3',
    borderRightWidth: 1,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  imageQuickAccess: {flexDirection: 'column'},
  image: {height: 30, width: 30},
});

export default QuickAccess;
