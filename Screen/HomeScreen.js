import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '../assets/shoes.png'; 
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';

import { StyleSheet, Text,  View,FlatList, TouchableWithoutFeedback,Image,
        Pressable,  ScrollView,Dimensions,} from 'react-native';

 const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
 const cardPerSlide = 3
 const cardPadding = 15
 const paddingAround = cardPadding * 2 // slide horizontal padding
 const cardBetweenPadding = cardPadding * (cardPerSlide - 1)
 const totalPadding = paddingAround + cardBetweenPadding
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
                id: '58694a0f-3da1-471f-bd96-145571e29d72s',
                title: 'Third Item',
              },
              {
                id: '58694a0f-3da1-471f-bd96-145571e29d72ss',
                title: 'Third Item',
              },
              {
                id: 'a58694a0f-3da1-471f-bd96-145571e29d72ss',
                title: 'Third Item',
              },

          ];
const HomeScreen =(props) =>{
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      const { onPress, title = 'Save' } = props;
    return(
        <View style={styles.container}>
             <StatusBar
              backgroundColor="#F0F0F0" />
              <View>
              <ScrollView
             contentContainerStyle={{
                justifyContent:"space-between",
            }}
             horizontal={true}
            alwaysBounceHorizontal={true}>
            <View style={styles.catContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>
           
            </View>
            </ScrollView>
              </View>
       
         <View style={styles.itemContainer}>
         <FlatList
            data={DATA}
            keyExtractor={({ id }, index) => id}  
            numColumns={2}  
            renderItem={({item, index}) =>                        
          ProductCard(item)//this is a main view
        }
          />
         </View>
        </View>

    )
}

const ProductCard=(item)=>{
    return(           

        <TouchableWithoutFeedback>
       <View style={styles.mainCardView}>
           <View style={styles.cardImage}>
            <Image source={logo} style={styles.image}/> 
           </View>
           <View style={styles.cardDetail}>
               <Text style={styles.itemNameTxt}>Red Shoes</Text>
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
        paddingTop:5,
     
    },
    
    catContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
      //  borderWidth:1,  
        padding:5
     
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    itemContainer: {
        flex:1,
        justifyContent: "space-between",
        backgroundColor: "#F0F0F0",
        alignItems:"center",
    },
    mainCardView: {
        width:167,
        height:206,
        borderRadius:6,
        backgroundColor:"#FFFFFF",
        margin:5,
        marginTop:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor:'#000000',
      borderColor: '#000000',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image:{
        resizeMode: "cover",
        width:167,
        height:131,
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
        paddingTop:5,
        marginTop:5,            
        fontFamily:'EBGaramond_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
       
    },
    
  });
export default HomeScreen;