import React from "react";
import Footer from "../Components/organisim/cartPage/Footer";
import { View } from 'react-native';
import Content from "../Components/organisim/checkoutPage/Content";
import moment from 'moment';
import useTheme from "../Service/ThemeContext";
import SuccessMessage from '../Components/organisim/popUp/SuccessMessage';
import useApi from "../Service/ApiContext";
import {CreateSaleEndPoint} from"../Service/URLstring"

const CheckoutScreen = ({navigation}) =>{
  const{change,getChange,getTotalItem,getDate,product,successReset} = useTheme();
   const{error,token} = useApi(); 
  const [modalVisible, setModalVisible] = React.useState(false);


  const checkOut = async () =>{
    try {
      const response =  await fetch(CreateSaleEndPoint,{
        method:"POST",
        headers:{
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body:JSON.stringify(product)
      });
      if(response.status === 200 || response.status === 201){
        successReset()
      
      }
     } catch (ex) {
       error(ex)
     } 
  }
  React.useEffect(()=>{
    getChange('0');
    getTotalItem()
    getDate(moment().format('MM/DD/YYYY'))
  },[])

      const confirmSuccesEvent =()=>{
        setModalVisible(false);
        navigation.navigate("Home");
      }
      const showSuccessEvent =()=>{
        checkOut();
        setModalVisible(true);
      }
  return(
    
      <View style={{flex:1,  backgroundColor: '#F0F0F0',}}>
         <SuccessMessage 
        message={"Successful"}
        visible={modalVisible} 
        onPress={confirmSuccesEvent}/>
          <Content/>
          <Footer 
           event={showSuccessEvent}
           total={"Change:"+change} 
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