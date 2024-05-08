// components/DogGroups.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const fetchGroups = async () => {
  const response = await axios.get('https://dogapi.dog/api/v2/groups');
  return response.data.data;
};

function DogGroups() {
  const { data: groups, isError, isLoading, error } = useQuery({
    queryKey: ['groups'],
    queryFn: fetchGroups
  });

  if (isLoading) return <ActivityIndicator />;
  if (isError || !groups) return <Text>Error at retrieving groups or no groups available.</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.attributes.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',  // Beige background
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 20,
  },
  item: {
    backgroundColor: '#FFF8DC', // Lighter beige for the items
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#8B4513',  // Saddle Brown
  },
});

export default DogGroups;
