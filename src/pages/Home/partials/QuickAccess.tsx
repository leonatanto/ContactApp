import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const QuickAccess: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Left Quick Access */}
      <View style={styles.quickAccessContainer}>
        <View style={styles.quickAccess}>
          <View style={styles.imageQuickAccess}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('@images/chat.png')}
            />
            <Text>121 Review </Text>
          </View>
        </View>
      </View>

      {/* Right Quick Access */}
      <View style={styles.quickAccessContainer}>
        <View style={styles.quickAccess}>
          <View style={styles.imageQuickAccess}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('@images/point.png')}
            />
            <Text>0 Referral </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Add padding for spacing between items and edges
  },
  quickAccessContainer: {
    flex: 1, // Divide the available space equally between the two QuickAccess items
  },
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items to the left
    alignItems: 'center',
  },
  imageQuickAccess: {
    flexDirection: 'column',
  },
  image: {
    height: 30,
    width: 30,
  },
});

export default QuickAccess;
