// components/BreedDetails.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const fetchBreedDetails = async (breedId) => {
  const response = await axios.get(`https://dogapi.dog/api/v2/breeds/${breedId}`);
  return response.data.data;
};

function BreedDetails({ route }) {
  const { breedId } = route.params;
  const { data: breed, isError, isLoading, error } = useQuery({
    queryKey: ['breedDetails', breedId],
    queryFn: () => fetchBreedDetails(breedId)
  });

  if (isLoading) return <ActivityIndicator />;
  if (isError || !breed) return <Text>Error or no breed details retrieved.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.title}>{breed.attributes.name}</Text>
        <Text style={styles.description}>{breed.attributes.description}</Text>
        <Text style={styles.info}>Life Span: {breed.attributes.life.min}-{breed.attributes.life.max} years</Text>
        <Text style={styles.info}>Male Weight: {breed.attributes.male_weight.min}-{breed.attributes.male_weight.max} kg</Text>
        <Text style={styles.info}>Female Weight: {breed.attributes.female_weight.min}-{breed.attributes.female_weight.max} kg</Text>
        <Text style={styles.info}>Hypoallergenic: -{breed.attributes.hypoallergenic ? 'Yes' : 'No'}-</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',  // Beige background
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    backgroundColor: '#FFF8DC', // Lighter beige for the box
    borderRadius: 10,
    padding: 20,
    width: '90%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',  // Saddle Brown
    marginBottom: 10,
    textAlign: 'center', // Center-align text for consistency
  },
  description: {
    fontSize: 16,
    color: '#A0522D',  // Sienna
    marginBottom: 10,
    textAlign: 'center', // Center-align text to match the rest of the app
  },
  info: {
    fontSize: 14,
    color: '#8B4513',  // Tan
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center', 
  },
});

export default BreedDetails;
