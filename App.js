import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, Button, useWindowDimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

const renderScene = SceneMap({

  
  first: HomeScreen,
  second: DetailsScreen,  
  third: Profile,

});

function Profile(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>profile Screen</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./imgs/HD-wallpaper-white-shelf-shelf-white.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center'}}>
       <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 40, height: 40}}/>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
//const Stack = createNativeStackNavigator();

function App() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
      { key: 'third', title: 'Third' },
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition='bottom'
      initialLayout={{ width: layout.width }}
    />
    
    /*
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    */
    
  );
}

const styles = StyleSheet.create({

});

export default App;