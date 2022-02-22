import React from "react";
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';
import Footer from "../Components/organisim/cartPage/Footer";
import { View } from 'react-native';
import Content from "../Components/organisim/checkoutPage/Content";

 const CheckoutScreen = ({navigation}) =>{
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
   
  return(
      <View style={{flex:1,  backgroundColor: '#F0F0F0',}}>
          <Content/>
          <Footer 
           event={()=>navigation.navigate("Home")}
           total={"Change:0"} 
           value={"CheckOut"}/>
      </View>
  )   
 }


 export default CheckoutScreen;