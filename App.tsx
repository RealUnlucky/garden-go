import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, Button, useWindowDimensions, FlatList, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Card} from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from './components/BottomSheet';


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
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('http://192.168.0.100:3000/data',{
      method:'GET'
    })
    .then(Response => Response.json())
    .then(article => {
      setData(article)
      
    })
  },[])

  const ref = React.useRef<BottomSheetRefProps>(null);

  const onPress = React.useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);
  
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={{fontSize: 40, marginTop: '9%', textAlign: 'center', color: '#074415', fontWeight: 'bold'}}>
          GardenGO
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image source={require('./imgs/plant.png')} style={{width: '100%', height: '100%'}}></Image>
        </TouchableOpacity>
        <View style={{marginTop: '5%', alignContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'green'}}>
            {data.Name}
          </Text>
          <Text style={{marginLeft: '2%', marginTop: '2%', fontSize: 15, color: 'green', textAlign:'center'}}>
            {data.prune}
          </Text>
        </View>


        <BottomSheet ref={ref}>
          <Text style={styles.title}>Pruning</Text>
          <Text style={styles.text}>
            {data.prune}
          </Text>
          <Text style={styles.title}>Sun</Text>
          <Text style={styles.text}>
            {data.sun}
          </Text>
          <Text style={styles.title}>Water</Text>
          <Text style={styles.text}>
            {data.water}
          </Text>
        </BottomSheet>
      </View>


      
    </GestureHandlerRootView>
    /*
    <ScrollView style={{flex: 1, backgroundColor: '#13ec5a'}}>
      <ImageBackground source={require('./imgs/background.jpg')} resizeMode="cover" style={{height:'150%', width:'100%'}}>
      <Text style={{fontSize: 40, marginTop: '9%', textAlign: 'center', color: '#074415', fontWeight: 'bold'}}>
        GardenGO
      </Text>
      <TouchableOpacity style={{marginTop: '5%', backgroundColor: '#c7f9d2', width: '50%', marginLeft: '25%', height: '50%', justifyContent: 'center'}}
        onPress={console.log('hi')}>
          <Image source={require('./imgs/plant.png')} style={{width: '100%', height: '100%'}}></Image>
      </TouchableOpacity>
      <View style={{marginTop: '5%', alignContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'green'}}>
          {data.Name}
        </Text>
        <Text style={{marginLeft: '2%', marginTop: '2%', fontSize: 15, color: 'green'}}>
          {data.prune}
        </Text>
      </View>
      </ImageBackground>
    </ScrollView>
    */
    
    
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
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
  button:{
    height:60,
    aspectRatio:1,
    borderRadius:25,
    opacity:0.6,
  },
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    textAlign:'center',
    fontSize:25,
  },
  text:{
    textAlign:'center',
  }
});

export default App;