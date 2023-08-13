import { StatusBar } from 'expo-status-bar';
import {style, SafeAreaView, ScrollView, FlatList, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Text, View, Image, Button, useWindowDimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const renderScene = SceneMap({

  
  first: HomeScreen,
  second: DetailsScreen,  
  third: Profile,
  fourth: test,

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
      { key: "fourth", title: "Fourth"}
    ]);
    
    function updateSearch(query) {
      console.log(value)
    };
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
  txtError: {
      marginTop: '2%',
      width: '89%',
      color: 'white',

  },
  vwClear: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 30,
      // width: 25,
      // height: 25,
  },
  textInput: {
      // backgroundColor: 'green',
      flex: 1,
      fontSize: 20,
      marginLeft: 40,
  },

  vwSearch: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      // width: 40,
      // backgroundColor: 'red'
  },
  icSearch: {
      height: 30, width: 30, marginLeft:50,
  },
  searchContainer:
  {
      backgroundColor: 'white',
      width: '90%',
      marginTop: 70,
      height: 40,
      flexDirection: 'row'

  },
  container: {
      alignItems: 'center',
      marginTop: 108,
      justifyContent: 'center',
      // height: '100%', width: '100%' 
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 80,
    height: 600,
    justifyContent: 'top',
    // height: '100%', width: '100%' 
  },
  isClear: {
    height: 30, width: 30
  },
  resultText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    justyifyContent: 'bottom',
  }
});



function test() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState();
  //const [items, setItems] = useState([])
  const items = [
    "Rose", "Tulips", "Lavender", "Cactus", "Sunflower", "Daffodil", "Dandelion", "Daisy", "Watermelon", "Tree", "Pumpkin", "Weeds", "Cattail", "Pears", "Corn"
  ];
  
  const inputRef = useRef()
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])
  return (
      <ImageBackground styles={{alignItems: "end",}} source={require('./imgs/image.jpg')}>
        <View style={[styles.container, style]}>
          <View style={styles.searchContainer}>
              <View style={styles.vwSearch}>
                
                  <Image
                      style={styles.icSearch}
                      source={require('./imgs/ic_search.png')} />
              </View>

              <TextInput
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  type="search" 
                  placeholder="Search for plants!"
                  style={styles.textInput}
                  onChangeText={(text) => {
                          setQuery(text)
                      }
                  }
              />
              {
                  query ?
                      <TouchableOpacity
                          onPress={() => setQuery('')}
                          style={styles.vwClear}>
                          <Image
                              style={styles.icClear}
                              source={require('./imgs/ic_clear.png')} />
                      </TouchableOpacity>
                      : <View style={styles.vwClear} />
              }
              

            </View>
          <View style={[styles.resultContainer, style]}>
            {filteredItems.map(item => (
              <Text style={styles.resultText}>{item}</Text>
            ))}
          </View>
        </View>
      </ImageBackground>    
  )
}



export default App;