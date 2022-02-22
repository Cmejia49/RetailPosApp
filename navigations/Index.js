import * as React from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

import MainMenuNavigator from './MainMenuNavigator.js'
import DamageNavigator from './DamageNavigator.js';
import SaleNavigator from './SaleNavigator.js';
import ExpensesNavigator from './ExpensesNavigator'
const drawer = createDrawerNavigator();

const Index = () =>{
    return(
        <NavigationContainer>
        <drawer.Navigator 
        screenOptions={{
          headerShown: false,
               gestureEnabled:false ,
               swipeEnabled:false, 
          drawerActiveBackgroundColor:'#000',
          drawerActiveTintColor:"#fff",
          drawerInactiveTintColor:"#000",
          drawerLabelStyle:{
            marginLeft:-25,
          fontFamily:"Roboto",
          fontWeight:"400",
          fontSize:18
         }
         }}>           
             <drawer.Screen name="Menu"
             component={MainMenuNavigator} 
             options={{
              drawerIcon:({color})=>(
              <FontAwesome name="home" size={24} color={color} />
              ),
               headerLeft:()=>(
                 GoToButton()
               ),
             }}
             />
   
   
         <drawer.Screen name="Sale" component={SaleNavigator} 
               options={{
                drawerIcon:({color})=>(
                  <FontAwesome name="list-alt" size={24} color={color} />
                  ),
                 headerLeft:()=>(
                   GoToButton()
                 ),
               }}/>
   
   <drawer.Screen name="Expenses Report" component={ExpensesNavigator} 
               options={{
                drawerIcon:({color})=>(
                  <FontAwesome5 name="file-invoice-dollar" size={24} color={color} />
                  ),
                 headerLeft:()=>(
                   GoToButton()
                 ),
               }}/>
   
   <drawer.Screen name="damage" component={DamageNavigator} 
              options={{
                drawerIcon:({color})=>(
                  <FontAwesome5 name="house-damage" size={24} color={color} />
                  ),
                 headerLeft:()=>(
                   GoToButton()
                 ),
               }}/>
            </drawer.Navigator>
       </NavigationContainer>
    )
}

export default Index;