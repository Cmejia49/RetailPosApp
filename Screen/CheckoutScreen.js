import React from "react";
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';
import Footer from "../Components/organisim/cartPage/Footer";
import { View,Modal,Text,Alert,Button,StyleSheet,Pressable } from 'react-native';
import Content from "../Components/organisim/checkoutPage/Content";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import Calendar from "../Components/organisim/popUp/Calendar";
 

const CheckoutScreen = ({navigation}) =>{
  const [modalVisible, setModalVisible] = React.useState(false);
  let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      const confirmSuccesEvent =()=>{
        setModalVisible(!modalVisible);
      }
      const showSuccessEvent =()=>{
        setModalVisible(true);
      }
  return(
      <View style={{flex:1,  backgroundColor: '#F0F0F0',}}>
       

          <Content/>
          <Footer 
           event={showSuccessEvent}
           total={"Change:0"} 
           value={"CheckOut"}/>
      </View>
  )   
 }
 

 export default CheckoutScreen;

 /** //Succes
  *    <SuccessMessage 
        message={"Successful"}
        visible={modalVisible} 
        onPress={confirmSuccesEvent}/>
  */