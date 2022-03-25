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
import useTheme from '../Service/ThemeContext';

const CartScreen=({navigation })=>{
  const {getTotal,product,total} = useTheme();

      React.useEffect(()=>{
        getTotal()
        },[product])

  const navCheckout = () =>{
    
    navigation.navigate('Checkout')
  }
    return(
        <View style={{flex:1}}>
          <Content/>
          <Footer 
           total={"Total:"+total} 
           value={"Proced"}
          event ={navCheckout}/>
        </View>
    )
}

export default CartScreen;