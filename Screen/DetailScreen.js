import * as React from 'react';
import { StyleSheet, View,Image,Dimensions,Button  } from 'react-native';
import logo from '../assets/shoes.png'; 
import Content from '../Components/organisim/detailPage/Content';
import Footer from '../Components/organisim/detailPage/Footer';
import SuccessMessage from '../Components/organisim/popUp/SuccessMessage';
import InputMessage from '../Components/organisim/popUp/InputMessage';
import useApi from "../Service/ApiContext";
import useDetailOper from "../Service/DetailContext";
import {GetDetail} from "../Service/URLstring";
import * as SecureStore from 'expo-secure-store';
import useTheme from '../Service/ThemeContext';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



const DetailScreen =({navigation,route}) =>{
  const {detail,getDetail,callEndpoint,error} = useApi();

  const {getVariety,setIndex3,reset,cartId,itemCode,
          getIndex3,index3,name,quantity,stock,stockFid
         ,variationValue,subVariationValue,subtotal,inputPrice} = useDetailOper();

    const {addCart} = useTheme();

    const [cartMessage,setCartMessage] = React.useState(false);
    const [damageMessage,setDamageMessage] = React.useState(false);
    


    const fetchDetail = async () => {
        try {
          reset()
          const response = await fetch(GetDetail+route.params.paramKey);
          const json = await response.json();
          if(response.status == 200){
           await getDetail(json)
           await getVariety(json)
          }
       } catch (ex) {
        error(ex)
       } 
     }

     const retrieveIndex3 = async()=>{
      const result = await SecureStore.getItemAsync("index3");
    
       if(result != null){
        await setIndex3(~~JSON.parse(result) *1);
       }else{
        await getIndex3(detail);
         await SecureStore.setItemAsync("index3",JSON.stringify(index3));
       }
     }

    const addToDamage = ()=>{
        setDamageMessage(true);
    }
    const addToDamageConfirm = ()=>{
        setDamageMessage(!damageMessage);
    }
    const inputAmount = ()=>{
        setCartMessage(true);
      }
      const inputAmountConfirm=()=>{
        const product = {
          ProductName:name+","+variationValue+","+subVariationValue,
          Price:inputPrice,
          Quantity:quantity,
          StockFid:stockFid,
          ItemCode:itemCode,
          name,
          stock,
          cartId,
          variationValue,
          subVariationValue,
          subtotal
      }
        addCart(product);
        navigation.navigate("Home");
        setCartMessage(!cartMessage);
      }

      React.useEffect(() => {
        callEndpoint();
        fetchDetail();
        retrieveIndex3();
        return()=>{reset()}
      }, []);

    
    return(
        <View style={styles.container}>
        
               <InputMessage
        visible={cartMessage} 
        onPress={()=>setCartMessage(!cartMessage)}
        navigate={inputAmountConfirm}/>
             <SuccessMessage 
                message={"Succesful\nAdded to damage"}
                visible={damageMessage} 
                onPress={addToDamageConfirm}
              />
              
            <View>
            <Image source={{uri:"https://b1ed-110-93-87-55.ngrok.io/wwwroot/uploads/Shoes.png"}} style={styles.image}/> 
            </View>
            <Content/>
            <Footer
              addDamage={addToDamage}
              addCart={inputAmount}
             />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginTop:10,
    },


    image:{
        alignSelf:'center',
        resizeMode:'cover',
        width:screenWidth,
        height:218
    },
});
export default DetailScreen;