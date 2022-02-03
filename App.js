import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';


//Import Screen
import HomeScreen from "./Screen/HomeScreen.js"
import DetailScreen from "./Screen/DetailScreen"

const drawer = createDrawerNavigator();
export default function App() {
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
          title: 'Home',
          headerStyle: {
            backgroundColor: '#FFFFFF',
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
             {marginRight: 0,}
             } 
             />
               <AntDesign.Button name="search1"  
             borderWidth={1} 
             size={24} 
             backgroundColor = "#FFFFFF" 
             color="black"
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
              gestureEnabled:false ,
              swipeEnabled:false, 
             /* headerRight: () => (
                <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
                Login with Facebook
              </FontAwesome.Button>
              ),*/
            }}/>
         </drawer.Navigator>
    </NavigationContainer>
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
