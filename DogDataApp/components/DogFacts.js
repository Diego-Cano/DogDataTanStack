// components/DogFacts.js
import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const fetchFacts = async () => {
  const response = await axios.get('https://dogapi.dog/api/v2/facts');
  // Randomly pick one fact from the api.
  const randomIndex = Math.floor(Math.random() * response.data.data.length);
  return response.data.data[randomIndex];
};

function DogFacts() {
  const queryClient = useQueryClient();
  const { data: fact, isError, isLoading, refetch } = useQuery({
    queryKey: ['fact'],
    queryFn: fetchFacts
  });

  if (isLoading) return <ActivityIndicator />;
  if (isError || !fact) return <Text>No fact available or error retrieving fact.</Text>;

  // Function to refresh
  const refreshFact = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.factBox}>
        <Text style={styles.fact}>{fact.attributes.body}</Text>
      </View>
      <Button title="New Fact" onPress={refreshFact} color="#8B4513" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5DC', // Beige background
  },
  factBox: {
    backgroundColor: '#FFF8DC', // Lighter beige for the box
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fact: {
    fontSize: 18,
    textAlign: 'center',
    color: '#A0522D',  // Sienna
  },
});

export default DogFacts;
