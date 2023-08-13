import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'


function HomeScreen({ navigation }) {

  const [data, setData] = useState([{}])
  
  useEffect(() => {
    fetch("/hello").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <div>
      {(typeof data.hello === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{hello}</p>
        ))
      )

      }
    </div>

 /*   <View style={styles.container}>
      <ImageBackground source={require('./imgs/HD-wallpaper-white-shelf-shelf-white.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <Button title="button" onPress={() => navigation.navigate('Details')}><Image source={require('./imgs/IMG_3484.jpg')} style={{width: 40, height: 40}}/></Button>
      </ImageBackground>
    </View>*/
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({

});

export default App;