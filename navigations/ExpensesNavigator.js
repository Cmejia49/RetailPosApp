import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
//Import Screen
import HeaderCartGrp from "../Components/molecules/HeaderCartGrp"
import ExpensesScreen from "../Screen/ExpensesScreen";
import AddExpensesScreen from "../Screen/AddExpensesScreen";
import { ExpensesProvider } from '../Service/ExpensesContext';
const stack = createStackNavigator();
const ExpensesNavigator = () =>{
    return (
      <ExpensesProvider>
        <stack.Navigator>
          <stack.Screen name="Expenses" component={ExpensesScreen}  options={{
                  title: 'Expenses',
                  headerTitle:'Expenses Summary',
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
        </ExpensesProvider>
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
export default ExpensesNavigator;