import * as React from 'react';
import { StyleSheet, View,Image,Dimensions  } from 'react-native';
import logo from '../assets/shoes.png'; 
import Content from '../Components/organisim/detailPage/Content';
import Footer from '../Components/organisim/detailPage/Footer';
import SuccessMessage from '../Components/organisim/popUp/SuccessMessage';
import InputMessage from '../Components/organisim/popUp/InputMessage';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DetailScreen =({navigation}) =>{
    const [cartMessage,setCartMessage] = React.useState(false);
    const [damageMessage,setDamageMessage] = React.useState(false);
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
        setCartMessage(!cartMessage);
      }
    return(
        <View style={styles.container}>
               <InputMessage
        visible={cartMessage} 
        onPress={inputAmountConfirm}
        navigate={()=>{navigation.navigate("Home");setCartMessage(!cartMessage)}}/>
             <SuccessMessage 
        message={"Succesful\nAdded to damage"}
        visible={damageMessage} 
        onPress={addToDamageConfirm}/>
            <View>
            <Image source={logo} style={styles.image}/> 
            </View>
            <Content/>

            <Footer
             addDamage={addToDamage}
             addCart={inputAmount}/>
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