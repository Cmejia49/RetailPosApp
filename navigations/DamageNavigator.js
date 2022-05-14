import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
//Import Screen
import DamageScreen from '../Screen/DamageScreen.js'
import AddExpensesScreen from "../Screen/AddExpensesScreen";
const stack = createStackNavigator();
const DamageNavigator = () =>{
    return (
        <stack.Navigator>
          <stack.Screen name="Damage" component={DamageScreen}  options={{
                  title: 'Damage Report',
                  headerTitle:'Damage Report',
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
          <stack.Screen name="AddExpenses" component={AddExpensesScreen}  />
        </stack.Navigator>
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
export default DamageNavigator;