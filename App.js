import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Button,Animated } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

//Import Screen
import HomeScreen from "./Screen/HomeScreen.js"
import DetailScreen from "./Screen/DetailScreen"

import * as f from './Screen/HomeScreen.js'
const drawer = createDrawerNavigator();
export default function App(props) {
  const [isClicked, setisClicked] = React.useState(false);
  const fadeAnim =React.useRef(new Animated.Value(0)).current;

  const isBolean = () =>{
    if(isClicked === true){
      setisClicked(false);
    }else{
      setisClicked(true);
    }
    return isClicked;
  }
  return (
    <NavigationContainer>
     <drawer.Navigator initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#FFFFFF',
              width: 240,
              
            },
            drawerLabelStyle:{
              color:'#000000'
            },          
          }}>
            
          <drawer.Screen name="Home"
          component={HomeScreen}    
          options={{
        
          headerStyle: {
            backgroundColor: '#FFFFFF',
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height:4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 4,
          },
          
          headerTintColor: '#000000',
          headerTitle:"",
          headerRight: () => (
            <View style={styles.row}>
                  <AntDesign.Button name="shoppingcart"  
             borderWidth={1} 
             size={24} 
             backgroundColor = "#FFFFFF" 
             color="black"
             marginRight= {10}
             iconStyle={
             {marginRight: 5,}
             } 
             >
               <Text style={{  fontWeight: 'bold', fontSize:18}}>4</Text>
             </AntDesign.Button>
               <AntDesign.Button name="search1"  
             borderWidth={1} 
             size={24} 
             backgroundColor = "#FFFFFF" 
             color="#000"
             marginRight= {10}
             iconStyle={
             {marginRight: 0,}
             } 
            
             />
            </View>             
          ),
          
          headerTitleStyle: {
            fontWeight: 'bold',
          },
           }} />
          <drawer.Screen name="About" component={DetailScreen} 
            options={{
              title: 'About',
              headerStyle: {
                backgroundColor: '#0C0C0C',
              },
              drawerLockMode: 'locked-closed',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#FFFFFF',
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height:4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              },
              gestureEnabled:false ,
              swipeEnabled:false, 
              headerLeft:()=>(
                GoToButton()
              ),
            }}/>
         </drawer.Navigator>
    </NavigationContainer>
  );
}
function GoToButton() {
  const navigation = useNavigation();
  return (
    <AntDesign.Button name="arrowleft"  
    size={25} 
    backgroundColor = "#FFFFFF" 
    color="#000"
    iconStyle={
    {marginRight: 0,}
    } 
    onPress={() => navigation.goBack()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

});
