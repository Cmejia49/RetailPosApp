import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
//Import Screen
import HeaderCartGrp from "../Components/molecules/HeaderCartGrp"
import CartScreen from "../Screen/CartScreen";
import CheckoutScreen from "../Screen/CheckoutScreen"
const stack = createStackNavigator();
const CartNavigator = () =>{
    return(
        <stack.Navigator>
            <stack.Screen
              name="Cart Navigator"
              component={CartScreen}
              options={{
                title: 'Cart',
                headerTitle:'Cart',
                headerTitleAlign: 'center',
                drawerLockMode: 'locked-closed',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color:'#000',
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
              }}
            />
               <stack.Screen name="Checkout" component={CheckoutScreen}/>
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
export default CartNavigator;