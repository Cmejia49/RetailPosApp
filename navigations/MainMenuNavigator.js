import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
//Import Screen
import HeaderCartGrp from "../Components/molecules/HeaderCartGrp"
import HomeScreen from "../Screen/HomeScreen";
import CartNavigator from './CartNavigator';
import DetailScreen from '../Screen/DetailScreen';
import { StackRouter } from 'react-navigation';
const stack = createStackNavigator();
const MainMenuNavigator = () =>{
    return(
        <stack.Navigator>
            <stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title:"",
                tabBarStyle: { display: "none" },
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
              headerLeft:()=>(
                menuButton()
              ),
             headerRight:()=>(
                cartButton()
             )
          
               }}
            />
            <stack.Screen
              name="Cart"
              component={CartNavigator}
              options={{
                headerShown:false,
                gestureEnabled:false ,
                swipeEnabled:false, 
              }}
            />
            <stack.Screen
              name="Detail"
              component={DetailScreen}
              />
        </stack.Navigator>
    )
}

const menuButton=()=>{
    const navigation = useNavigation();
    return (
        <MaterialIcons.Button name="menu"  
        size={25} 
        backgroundColor = "#FFFFFF" 
        color="#000"
        iconStyle={
        {marginRight: 0,}
        } 
        onPress={() => navigation.openDrawer()}
        />
      );
    
}
const cartButton=()=>{
    const navigation = useNavigation();
    return (
        <HeaderCartGrp onPress={() => navigation.navigate("Cart")}/>
      );
    
  }
export default MainMenuNavigator;