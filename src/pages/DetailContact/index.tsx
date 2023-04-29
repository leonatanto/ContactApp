import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {getContactDetail} from '../../providers/api';
import globalStyles from '../helpers/globalStyle';

const DetailContact: React.FC<{route: any}> = ({route}) => {
  const {id} = route.params;
  const [contact, setContact] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactDetail(id);
  }, [id]);

  const fetchContactDetail = async (userId: string) => {
    try {
      const contactDetail = await getContactDetail(userId);
      setContact(contactDetail?.data);
    } catch (error) {
      console.error('Error fetching contact detail:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !contact) {
    // Show loader while loading or contact is null
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.contactImage} source={{uri: contact.photo}} />
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, globalStyles.titleBold]}>
          {`${contact.firstName} ${contact.lastName}`}
        </Text>
        <Text style={[styles.subtitle, globalStyles.placeholderRegular]}>
          {`Age: ${contact.age}`}
        </Text>
        <Text style={[styles.subtitle, globalStyles.placeholderRegular]}>
          {`ID: ${contact.id}`}
        </Text>
        {/* Add more contact details here if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  contactImage: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailContact;
