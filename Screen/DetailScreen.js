import * as React from 'react';
import { StyleSheet, View,Image,Dimensions,Button  } from 'react-native';

import Content from '../Components/organisim/detailPage/Content';
import Footer from '../Components/organisim/detailPage/Footer';
import SuccessMessage from '../Components/organisim/popUp/SuccessMessage';
import InputMessage from '../Components/organisim/popUp/InputMessage';
import FailedMessage from '../Components/organisim/popUp/FailedMessage';
import useApi from "../Service/ApiContext";
import useDetailOper from "../Service/DetailContext";
import {ipAddress} from "../Service/URLstring";
import * as SecureStore from 'expo-secure-store';
import useTheme from '../Service/ThemeContext';
import { fetchDetail,postDamage } from '../Service/FetchService';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



const DetailScreen =({navigation,route}) =>{
  const {detail,getDetail,callEndpoint,error,token} = useApi();

  const {getVariety,setIndex3,reset,cartId,itemCode,variation,subVariation,
          getIndex3,index3,name,quantity,stock,stockFid
         ,variationValue,subVariationValue,subTotal,inputPrice} = useDetailOper();

    const {addCart} = useTheme();

    const [cartMessage,setCartMessage] = React.useState(false);
    const [damageMessage,setDamageMessage] = React.useState(false);
    const [failed, setFailed] = React.useState(false)


    const retrieveDetail = async () => {
        try {
          await fetchDetail(route.params.paramKey).then(res=>{
              getDetail(res)
              retrieveIndex3(res);
              getVariety(res)
            });

       } catch (ex) {
        error(ex)
       } 
     }

     const insertDamage=async(damage)=>{
      try {
        await postDamage(damage,token).then(res=>{
          if(res === 200 || res === 201){
            console.debug("success")
          }
        })

       } catch (ex) {
        console.debug(ex);
       } 
     }

     const retrieveIndex3 = async(json)=>{
      const result = await SecureStore.getItemAsync("index3");
    
       if(result != null){
         console.debug("here")
        await setIndex3(~~JSON.parse(result) *1);
       }else{
         console.debug("here1")
         await getIndex3(json);
         await SecureStore.setItemAsync("index3",index3);
       }
     }

    const addToDamage = ()=>{
      const damage={
        ProductName:name+","+variationValue+","+subVariationValue,
        ItemCode:itemCode,
        Quantity:quantity,
        StockFid:stockFid,
      }
        insertDamage(damage)
        setDamageMessage(true);
    }
    const addToDamageConfirm = ()=>{
        setDamageMessage(!damageMessage);
    }
    const addToCart = ()=>{
      if(quantity != 0){
        if(variation.length > 0 && subVariation.length<=0){
          if (variationValue !== ""){
            console.debug('ger1e')
            setCartMessage(true)
          }else{
            setFailed(true)
           }
        }else if(subVariation.length > 0){
          if (variationValue !=="" && subVariation !==""){
               console.debug('gere'+variationValue+""+subVariationValue)
                setCartMessage(true)
             }else{
              setFailed(true)
             }
        }else if(variation.length<=0){
          console.debug('dgere')
           setCartMessage(true)
          }else{
            setFailed(true)
          }
      }else{
        setFailed(true)
      }
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
          subTotal
      }
      if(inputPrice ===""){
        setFailed(true);
      }else{
      addCart(product);
        navigation.navigate("Home");
        setCartMessage(!cartMessage);
      }
      }

      React.useEffect(() => {
        callEndpoint();
        retrieveDetail();
        return()=>{reset()}
      }, []);

    
    return(
        <View style={styles.container}>
          <FailedMessage
           visible={failed}
           onPress={()=>setFailed(!failed)}/>
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
            <Image source={{uri:ipAddress+"/wwwroot/uploads/"+detail.imageName}} style={styles.image}/> 
            </View>
            <Content/>
            <Footer
              addDamage={addToDamage}
              addCart={addToCart}
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