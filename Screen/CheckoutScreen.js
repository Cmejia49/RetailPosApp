import React from "react";
import Footer from "../Components/organisim/cartPage/Footer";
import { View } from 'react-native';
import Content from "../Components/organisim/checkoutPage/Content";
import moment from 'moment';
import useTheme from "../Service/ThemeContext";
import SuccessMessage from '../Components/organisim/popUp/SuccessMessage';
import useApi from "../Service/ApiContext";
import { postSale } from "../Service/FetchService";
const CheckoutScreen = ({navigation}) =>{
  const{change,getChange,getTotalItem,getDate,product,successReset} = useTheme();
   const{error,token,calledEndPoint} = useApi(); 
  const [modalVisible, setModalVisible] = React.useState(false);


  const checkOut = async () =>{
    try {
      await postSale(product,token).then(res=>{
        console.debug(res)
        if(res === 200 || res === 201){
          successReset();
        }
      })
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