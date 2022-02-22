import React from "react";
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';

import { StyleSheet, Text,  View,TouchableWithoutFeedback,Pressable,  Dimensions,TextInput,KeyboardAvoidingView 
    ,Keyboard} from 'react-native';
import Content from "../Components/organisim/addExpensesPage/Content";
 const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

 const AddExpensesScreen = ({navigation}) =>{
    const [value, onChangeText] = React.useState('');
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
   
  return(
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "margin" : "height"}
    style={styles.container}
  >
          
        <Content/>
  
          <View style={styles.bottomContainer}>
          <View style={{flex:1}}backgroundColor={'#FFFFFF'}>
              <View style={{margin:10,paddingHorizontal:20}}>
              <Pressable style={styles.bottomBtn}
              onPress={()=>navigation.navigate("Expenses")}
            backgroundColor={'#7C39B0'}>
        <Text style={{
                fontSize:24,
                fontWeight:'400',
                fontFamily:'EBGaramond_400Regular',
                lineHeight:32,
                fontStyle:'normal',
                color:'#000',
                padding:10,
                
            }}>Save</Text>
                </Pressable>
              </View>
        </View>
    </View>
    </KeyboardAvoidingView>
  )   
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
    },

    dateContainer:{
        flex:0,
        margin:2,
        marginVertical:10,
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
        fontSize: 24,
        lineHeight: 28,
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


      bottomContainer:{
       flex:0,
       flexDirection:'row',
       justifyContent:'space-between',
       borderWidth:1.5,
       shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height:-6,
          },
          shadowOpacity:1,
          shadowRadius:4,
          elevation:5, 
      },
      bottomBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        borderWidth:1.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity:1,
        shadowRadius:4,
        elevation:5, 
      },
  });
 export default AddExpensesScreen;