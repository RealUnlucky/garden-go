import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, Button, useWindowDimensions, FlatList, SafeAreaView, ScrollView,TouchableOpacity,Alert,Touchable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Card} from 'react-native-paper'
import CollapsibleList from './CollapsibleList';

const renderScene = SceneMap({

  
  first: HomeScreen,
  second: DetailsScreen,  
  third: Profile,
  fourth: AboutScreen

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
  return (
    <SafeAreaView style = {{flex: 1}}>
      <ScrollView>
        <View>
          <Text style={{textAlign: 'center', fontSize: 35, marginBottom: '4%'}}>Plant Collection</Text>
        </View>

        <View style = {{flexDirection:'row', marginTop: '5%'}}>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginLeft: '15%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginRight: '15%'}}></Image>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection:'row', marginTop: '5%'}}>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginLeft: '15%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginRight: '15%'}}></Image>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection:'row', marginTop: '5%'}}>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginLeft: '15%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginRight: '15%'}}></Image>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection:'row', marginTop: '5%'}}>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginLeft: '15%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./imgs/IMG_3484.jpg')} style={{width: 150, height: 200, marginRight: '15%'}}></Image>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>  
  );
}

//const Stack = createNativeStackNavigator();


function AboutScreen({ navigation }) {
  const data = [
    { title: 'What is Garden Go?', content: 'Garden Go is a mobile app dedicated to inspiring more people to become gardeners by gamifying the process.' },
    { title: 'How does gardening relate to environmental sustainability?', 
    content: 'Just like trees, ordinary garden plants also absorb carbon dioxide and release oxygen. This helps mitigate the effects of climate change. \n Store bought foods create pollution through transportation and packaging. Growing your own fruit, vegetables, and herbs reduces the need to buy store bought. \n Proper gardening enhances soil health, which is better at retaining water and reduces the need for irrigation. This helps manage water runoff and prevent soil erosion, preventing flooding and reducing water pollution. \n Urban areas have heat islands, which can be shaded and cooled through the shade of trees and plants. \n Replacing the classic green lawn reduces lawn maintenance (and the water bill!) which can be even better if replaced with plants native to your area. \n' },
    { title: 'What else can I do to care for the environment through my garden?', 
    content: 'tbd' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./imgs/green-cartoon-plant-bg.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <Text style ={styles.aboutTitle}>About</Text>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <CollapsibleList data={data} />
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function App() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
      { key: 'third', title: 'Third' },
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'fourth', title: 'Fourth' },
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
  aboutTitle: {
    fontSize: 40,
    textAlign: 'center',
  }
});

export default App;