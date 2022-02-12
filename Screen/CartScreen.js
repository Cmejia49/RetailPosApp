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
        <View style={{flex:1.2}}>
           <View style={styles.itemContainer}>
         <FlatList contentContainerStyle={{ alignItems:'center'}} 
           showsVerticalScrollIndicator={false}
     
            data={DATA}
            keyExtractor={({ id }, index) => id}  
            renderItem={({item, index}) =>                        
          card()//this is a main view
        }
          />
         </View>
         <View style={{flex:0,flexDirection:'row',justifyContent:'space-between',borderWidth:1.5}}>
        <View style={{width:screenWidth/2.5, alignSelf:'center', alignItems:'center'}}backgroundColor={'#FFFFFF'}>
            <Text style={{
                fontSize:24,
                fontWeight:'400',
                fontFamily:'EBGaramond_400Regular',
                lineHeight:32,
                fontStyle:'normal'
            }}>Total: $2600</Text>
        </View>
            <Pressable style={styles.bottomBtn} 
            onPress={increment}
            backgroundColor={'#7C39B0'}>
        <Text style={{
                fontSize:24,
                fontWeight:'400',
                fontFamily:'EBGaramond_400Regular',
                lineHeight:32,
                fontStyle:'normal',
                color:'#fff'
            }}>Checkout</Text>
                </Pressable>
    </View>
        </View>
    )
}

const card=()=>{

    return(           

        <TouchableWithoutFeedback>
       <View style={styles.mainCardView}>
           <View style={styles.cardImage}>
            <Image source={logo} style={styles.image}/> 
           </View>
           <View style={styles.cardDetail}>
               <Text style={styles.itemNameTxt}>Red Shoes</Text>
               <Text style={styles.itemNameTxt}>Variation: Red,11</Text>
               <Text style={styles.itemPriceTxt}>$150.00</Text>
               <View style={{flexDirection:'row'}}>
                    <Pressable
                      style={{padding:3,paddingHorizontal:15 ,borderWidth:1,borderRightWidth:0}}>
                     <Text>-</Text>
                    </Pressable>
                    <TextInput 
                    defaultValue="1"
                    style={ styles.inputTxt}textAlign={'center'} textAlignVertical={'center'}/>
                    <Pressable 
                      style={{padding:3,paddingHorizontal:15,borderWidth:1,borderLeftWidth:0}}>
                     <Text>+</Text>
                    </Pressable>
                </View>
            <Text style={styles.itemPriceTxt}>$150.00</Text>
           </View>
       </View>
     </TouchableWithoutFeedback>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: "#F0F0F0",
            marginTop:-50,
            paddingTop:5,
         
        },
        inputTxt: {
            width:screenWidth/6,
            height:30,
            borderWidth:1,
            fontSize: 14,
            lineHeight: 32,
            fontFamily:'EBGaramond_500Medium',
            fontStyle:'normal',
            color: '#000',
            fontWeight:'500'
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontFamily:'Roboto',
            fontStyle:'normal',
            color: '#000',
          },
        itemContainer: {
            flex:1,
            backgroundColor: "#F0F0F0",
            alignItems:'center',
            alignContent:'center',
            alignSelf:'center',
        },
        mainCardView: {
            flexDirection:'row',
            width:screenWidth/1.1,
            height:screenHeight/5,
            borderRadius:6,
            backgroundColor:"#FFFFFF",
            marginTop:15,
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height:4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 5,
            elevation: 4,
            
        },
   
        bottomBtn:{
            alignItems: 'center',
            justifyContent: 'center',
            width:screenWidth/2.5,
            height:45,
            borderLeftWidth:1,
          },
    
        image:{
            resizeMode: "cover",
            width:screenWidth/3,
            
            height:screenHeight/5,
            borderRadius:6,
        },
        cardImage:{
            
            borderRadius:6,
            backgroundColor:'black',
        },
        cardDetail:{
            //borderWidth:1,
            justifyContent: "space-between",
            padding:5,
            marginTop:5,
        },
        itemNameTxt:{               
            fontFamily:'EBGaramond_400Regular',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 23,
           
        },
        itemPriceTxt:{             
            fontFamily:'EBGaramond_400Regular',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
           
        },
        
      });
export default CartScreen;