import React, { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import logo from '../assets/shoes.png'; 
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';

import { StyleSheet, Text,  View,FlatList, TouchableWithoutFeedback,Image,
        Pressable,  ScrollView,Dimensions,TextInput,SafeAreaView,Animated,Button, } from 'react-native';

 const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

 const CheckoutScreen = () =>{
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
   
  return(
      <View style={styles.container}>
          <View style={{flex:1, margin:20}}>
          <View style={styles.dateContainer}>
              <Text style={styles.dateTxt}>Date  01-28-2022</Text>
          </View>

          <View style={styles.summaryContainer}>
              <Text style={styles.summaryTxt}>Number of Item:</Text>
              <Text style={styles.summaryTxt}>6</Text>
              <Text style={styles.summaryTxt}>Total Payment:</Text>
              <Text style={styles.summaryTxt}>$2600</Text>
              <Text style={styles.summaryTxt}>Amount Received:</Text>
              <TextInput style={styles.inputTxt}
              value="$0.00"/>
          </View>

          <View style={styles.exactBtnContainer}> 
              <Pressable style={styles.exactBtn}>
                  <Text style={styles.exactBtnTxt}>
                      EXACT AMOUNT
                  </Text>
              </Pressable>
          </View>
          </View>
  
          <View style={styles.bottomContainer}>
          <View style={{flex:1}}backgroundColor={'#FFFFFF'}>
            <Text style={{
                fontSize:24,
                fontWeight:'400',
                fontFamily:'EBGaramond_400Regular',
                lineHeight:32,
                fontStyle:'normal',
                margin:10,
            }}>Change: $-2600</Text>
        </View>
            <Pressable style={styles.bottomBtn}
            backgroundColor={'#7C39B0'}>
        <Text style={{
                fontSize:24,
                fontWeight:'400',
                fontFamily:'EBGaramond_400Regular',
                lineHeight:32,
                fontStyle:'normal',
                color:'#fff',
                padding:10,
                
            }}>PROCEED</Text>
                </Pressable>
    </View>
      </View>
  )   
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    dateContainer:{
        flex:0,
        marginTop:20,
        margin:2,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation: 4, 
    },
    dateTxt:{
        fontFamily:'Roboto',
        fontSize:18,
        lineHeight:46,
        fontWeight:'400',
        fontStyle:'normal',
        lineHeight:21,
        marginHorizontal:5,
        padding:5
    },
    summaryContainer:{
        flex:2,
        justifyContent:'space-evenly',
        marginTop:30,
        margin:2,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation: 4, 
    },
    summaryTxt:{
        margin:5,
        marginVertical:10,
        fontSize: 18,
        lineHeight: 21,
        fontFamily:'Roboto',
        fontStyle:'normal',
        color: '#000',
        fontWeight:'700',
    },
    inputTxt: {
        margin:10,
        height:52,
        borderWidth:1,
        fontSize: 24,
        lineHeight: 32,
        fontFamily:'Roboto',
        fontStyle:'normal',
        color: '#000',
        fontWeight:'500',
        textAlign:'center',
      },
      exactBtnContainer:{
          flex:1,
            marginTop:20,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height:4,
          },
          shadowOpacity:1,
          shadowRadius:4,
          elevation:24, 
      },
      exactBtn:{
        borderWidth:1.5,
        backgroundColor:'rgba(0,0,0,0)',
      },
      exactBtnTxt:{
        textAlign:'center',
        fontFamily:'Roboto',
        fontWeight:'300',
        fontStyle:'normal',
        fontSize:24,
        lineHeight:28,
        padding:10
      },
      bottomContainer:{
       flex:0,
       flexDirection:'row',
       justifyContent:'space-between',
       borderWidth:1.5,
       shadowColor: "#000",
          shadowOffset: {
              width: 4,
              height:4,
          },
          shadowOpacity:1,
          shadowRadius:4,
          elevation:5, 
      },
      bottomBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width:screenWidth/2.5,
        borderLeftWidth:1,
      },
  });
 export default CheckoutScreen;