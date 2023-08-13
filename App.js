import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, Button, useWindowDimensions, FlatList, ScrollView,TouchableOpacity,Alert,Touchable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Card} from 'react-native-paper'

const renderScene = SceneMap({

  
  first: HomeScreen,
  second: DetailsScreen,  
  third: Profile,

});



function Profile(){
  return(
    <View>
      <View style={{backgroundColor: '#8cff6b'}}>
        <View style={{padding:10, width:'100%', backgroundColor: '#00833d', height: 175}}>
        </View>
        <View style={{alignItems:'center', backgroundColor: '#8cff6b'}}>
          <Image source={require('./imgs/IMG_3484.jpg')} style={{width:140, height:140,borderRadius:100,marginTop: -70}}></Image>
          <Text style={{fontSize: 25,fontWeight:'bold',padding:10}}>John Doe</Text>
          <Text style={{fontSize: 15,fontWeight:'bold',color: 'grey'}}>Member since August 12, 2023</Text>
        </View>
        <View style={{alignSelf: 'center', flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20}}>
          <Image source={require('./imgs/star.png')} style={{width:20,height:20}}></Image>
          <Text style={{marginTop:4}}>Points: 0</Text>
        </View>
        <TouchableOpacity style={{alignSelf: 'center', flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20}}>
          <Image source={require('./imgs/bell.png')} style={{width:20,height:20}}></Image>
          <Text>Missions</Text>
        </TouchableOpacity>
        <View style={{alignSelf: 'center', flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20}}>
          <Image source={require('./imgs/plant.png')} style={{width:20,height:25}}></Image>
          <Text style={{marginTop:4}}>No. of Plants: 0</Text>
        </View>
        <TouchableOpacity style={{alignSelf: 'center', flexDirection:'row',justifyContent:'center',backgroundColor:'#000',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20, marginBottom:40}}>
          <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#8cff6b', height: 200}}></View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
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
          (Plant) Information
        </Text>
        <Text style={{marginLeft: '2%', marginTop: '2%', fontSize: 15, color: 'green'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>
      </View>
      </ImageBackground>
    </ScrollView>
  );
}


function DetailsScreen({ navigation }) {
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

  

  console.log(data)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{data.Date}</Text>

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