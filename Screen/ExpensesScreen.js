import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Button,Alert,TouchableWithoutFeedback,Dimensions  } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import Content from '../Components/organisim/expensesPage/Content';
import Footer from '../Components/organisim/expensesPage/Footer';
import Filter from '../Components/organisim/expensesPage/Filter';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'r5c8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'e5x8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'w5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'q5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'z5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'x5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'v5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'cv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'xv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'zv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];  

const ExpensesScreen = ({navigation})=>{
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <View style={{flexDirection:'row',marginRight:20}}>
             <MaterialIcons.Button  name="add"
           size={20}
           backgroundColor="#fff"
            borderWidth={1}
           color="#000"
           paddingVertical={0}
           paddingHorizontal={-2}
           iconStyle={
           {
               borderWidth:1,
            marginRight:-1
           }
           } 
           onPress={()=>navigation.navigate('AddExpenses')}
           />
       
          </View>             

      ),
    });
  }, [navigation]);
    return(
        <View style={{  flex:1,
          backgroundColor: "#FFF4F4",
          paddingTop:5,}}>

            <Filter/>
            <Content data={DATA}/>
            <Footer/>
        </View>
    );
}
export default ExpensesScreen;