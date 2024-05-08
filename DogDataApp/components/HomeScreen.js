// components/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Fetching Dog Data with TanStack Query</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Dog Breeds"
          onPress={() => navigation.navigate('Breeds')}
          color="#8B4513" // Saddle Brown
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Dog Facts"
          onPress={() => navigation.navigate('DogFacts')}
          color="#D2B48C" // Tan
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Dog Groups"
          onPress={() => navigation.navigate('DogGroups')}
          color="#DEB887" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Beige background
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#8B4513', // Saddle Brown
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%', // Gives some padding to the sides
    borderRadius: 10, // Rounded corners for the buttons
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
