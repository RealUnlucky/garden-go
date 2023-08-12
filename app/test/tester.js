import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter, Link } from 'expo-router';

const tester = () => {
    const router = useRouter();
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Welcome to My App
        </Text>
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    );
  };

  export default tester;

