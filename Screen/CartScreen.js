import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TextInput,TouchableWithoutFeedback,Dimensions} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import {useFonts,EBGaramond_400Regular,EBGaramond_500Medium} from '@expo-google-fonts/eb-garamond';
import AppLoading from 'expo-app-loading';
import logo from '../assets/shoes.png'; 
import Content from '../Components/organisim/cartPage/Content';
import Footer from '../Components/organisim/cartPage/Footer';
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
        id: 'a58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'b58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },

  ];   
const CartScreen=({navigation })=>{
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
        EBGaramond_500Medium,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
  const increment = () =>{
    
    navigation.navigate('Checkout')
  }
    return(
        <View style={{flex:1}}>
          <Content data={DATA}/>
          <Footer 
           total={"Total:2600"} 
           value={"Proced"}
          event ={increment}/>
        </View>
    )
}

export default CartScreen;