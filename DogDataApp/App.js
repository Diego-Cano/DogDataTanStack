// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomeScreen from './components/HomeScreen';
import DogBreeds from './components/DogBreeds';
import BreedDetails from './components/BreedDetails';
import DogFacts from './components/DogFacts';
import DogGroups from './components/DogGroups';

// Assingment 
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Breeds" component={DogBreeds} options={{ title: 'Dog Breeds' }} />
          <Stack.Screen name="BreedDetails" component={BreedDetails} options={{ title: 'Breed Details' }} />
          <Stack.Screen name="DogFacts" component={DogFacts} options={{ title: 'Dog Facts' }} />
          <Stack.Screen name="DogGroups" component={DogGroups} options={{ title: 'Dog Groups' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
