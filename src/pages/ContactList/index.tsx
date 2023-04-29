import React, {useEffect, useState, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {deleteContact, getContactList} from '../../providers/api';
import globalStyles from '../helpers/globalStyle'; // Import global styles

const ContactList: React.FC = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<HomeData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getContactList();
      if (data?.data && data?.data.length > 0) {
        setContacts(data?.data);
        setError(null);
      } else {
        setError('No contacts found.');
      }
    } catch (error) {
      console.log(error);
      setError('Failed to fetch contacts. Please try again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const handleDetail = (id: string) => {
    navigation.navigate('DetailContact', {id});
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteContact(id);
      setContacts(
        prevContacts =>
          prevContacts?.filter(contact => contact.id !== id) || null,
      );
    } catch (error) {
      console.log(error);
      setError('Failed to delete contact. Please try again.'); // Set error message for delete operation failure
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = () => {
    navigation.navigate('AddContact');
  };

  if ((!contacts || contacts.length === 0) && !loading) {
    return (
      <View style={styles.container}>
        <Text style={[styles.emptyText, globalStyles.descriptionRegular]}>
          {error || 'No contacts found.'}
        </Text>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleAddContact}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({item}: {item: HomeData}) => {
    return (
      <TouchableOpacity
        onPress={() => handleDetail(item.id)}
        style={styles.cardContainer}>
        <Image
          resizeMode="contain"
          style={styles.contactImage}
          source={
            item.photo
              ? {uri: item.photo}
              : require('../../assets/images/point.png')
          }
        />
        <View style={styles.cardContent}>
          <Text style={[styles.title, globalStyles.descriptionRegular]}>
            {`${item.firstName} ${item.lastName}`}
          </Text>
          <Text style={[styles.subtitle, globalStyles.placeholderRegular]}>
            Age: {item.age}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Image
            source={require('../../assets/images/delete.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      )}
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#007bff']} // Adjust the color to fit your theme
          />
        }
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleAddContact}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CED0CE',
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#999',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 8,
    marginRight: 12,
  },
});

export default ContactList;
