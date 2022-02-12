import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions,Pressable,
        TextInput,SafeAreaView,Button  } from 'react-native';
import AppLoading from 'expo-app-loading';

import logo from '../assets/shoes.png'; 
import {useFonts,EBGaramond_400Regular,EBGaramond_500Medium} from '@expo-google-fonts/eb-garamond';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DetailScreen =() =>{
  const [stockCount = 12, setStockCount] = React.useState(0);

  const increment = () =>{
    setStockCount(stockCount + 1);
  }
  const decrement = () =>{
    setStockCount(stockCount - 1)
  }
    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
        EBGaramond_500Medium,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      const printButtonLabel = (event) => {
        console.log("Test");
        //do some stuff here
      };
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image source={logo} style={styles.image}/> 
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.titleTxt}>Rubber Shoes</Text>
                <View style={{flexDirection:'row',marginHorizontal:2}}>
                    <View style={{paddingRight:150,flex:1,flexWrap:'wrap'}}>
                        <Text style={styles.priceTxt}>$150</Text>
                    </View>
                    <View style={{paddingLeft:100,flex:1,flexWrap:'wrap'}}>
                        <Text style={styles.priceTxt}>DSD</Text>
                    </View>
                </View>
                <View style={{marginHorizontal:7, marginTop:10}}>
                    <Text style={{fontSize:18,fontFamily:'EBGaramond_400Regular',}}>Color:</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                <ButtonGroup
        buttons={["Red", "Blue", "Pink"]}
        doSomethingAfterClick={printButtonLabel}
      />
                </View>
                <View style={{marginHorizontal:7}}>
                    <Text style={{fontSize:18,fontFamily:'EBGaramond_400Regular',}}>Size:</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <ButtonGroup2
                buttons={["11", "12", "13"]}
                doSomethingAfterClick={printButtonLabel}
                />
                </View>
                <View style={{marginHorizontal:7}}>
                    <Text style={{fontSize:18,fontFamily:'EBGaramond_400Regular',}}>Quantity:</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:5,marginHorizontal:5 , paddingBottom:20}}>
                    <View style={{flexDirection:'row'}}>
                    <Pressable onPress={decrement}
                      style={{padding:3,paddingHorizontal:15 ,borderWidth:1,borderRightWidth:0}}>
                     <Text>-</Text>
                    </Pressable>
                    <TextInput 
                       onChangeText={newText => setStockCount(newText)}
                    defaultValue={stockCount + ""}
                    style={ styles.inputTxt}textAlign={'center'} textAlignVertical={'center'}/>
                    <Pressable onPress={increment}
                      style={{padding:3,paddingHorizontal:15,borderWidth:1,borderLeftWidth:0}}>
                     <Text>+</Text>
                    </Pressable>
                    </View>
              
                    <View style={{flexDirection:'row', margin:5,alignItems:'flex-end'}}
                    textAlignVertical={'bottom'}
                    >
                    <Text>Stock:</Text>
                    <Text>500</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop:10, flex:1, alignItems:'flex-start',alignSelf:'center' ,width:screenWidth, flexDirection:'row', justifyContent:'space-evenly',borderWidth:1}}>
                <Pressable style={styles.bottomBtn} backgroundColor={'#FFFFFF'}>
                    <Text>Cancel</Text>
                </Pressable>
                <Pressable style={styles.bottomBtn} backgroundColor={'#7C39B0'}>
                    <Text>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}


const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
    const [clickedId, setClickedId] =  React.useState(-1);
    const [activeId, setActiveId] =  React.useState(0);
    const handleClick = (event, id) => {
        setClickedId(id);
        if(clickedId === id){
        if(activeId == 0){
          setActiveId(1)
        }else{
          setActiveId(0)
        }
      }else{
          setActiveId(1)
      }
        doSomethingAfterClick(event);
      };
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <Pressable
            key={i}
            onPress={(event) => handleClick(event, i)}
            style={(i == clickedId && activeId == 1 )? styles.buttonActive : styles.button}
          >
              <Text>{buttonLabel}</Text>
          </Pressable>
        ))}
      </>
    );
  };

  const ButtonGroup2 = ({ buttons, doSomethingAfterClick }) => {
    const [clickedId, setClickedId] =  React.useState(-1);
    const [activeId, setActiveId] =  React.useState(0);
    const handleClick = (event, id) => {
      setClickedId(id);
      if(clickedId === id){
      if(activeId == 0){
        setActiveId(1)
      }else{
        setActiveId(0)
      }
    }else{
        setActiveId(1)
    }
      doSomethingAfterClick(event);
    };
  
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <Pressable
            key={i}
            onPress={(event) => handleClick(event, i)}
            style={(i == clickedId && activeId == 1 )? styles.buttonActive : styles.button}
          >
              <Text>{buttonLabel}</Text>
          </Pressable>
        ))}
      </>
    );
  };
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginTop:10,
    },

    imgContainer:{

    },

    image:{
        alignSelf:'center',
        resizeMode:'cover',
        width:screenWidth,
        height:218
    },

    detailContainer:{
        marginTop:20,
        margin:2,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, 
    },

    titleTxt:{
        fontFamily:'EBGaramond_400Regular',
        fontSize:36,
        lineHeight:46,
        fontWeight:'400',
        fontStyle:'normal',
        marginHorizontal:5,
    },

    priceTxt:{
        fontFamily:'EBGaramond_400Regular',
        fontSize:18,
        lineHeight:24,
        fontWeight:'400',
        fontStyle:'normal',
        padding:5,
    },

    button: {
        margin:5,
        alignItems: 'center',
        justifyContent: 'center',
        width:80,
        height:30,
        backgroundColor: '#FFFFFF',
        borderWidth:1,
      },

      
    buttonActive: {
        margin:5,
        alignItems: 'center',
        justifyContent: 'center',
        width:80,
        height:30,
        backgroundColor: 'rgba(0, 0, 0, 0.42)',
        borderWidth:1,
      },

      text: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily:'EBGaramond_400Regular',
        fontStyle:'normal',
        color: '#000',
      },

      inputTxt: {
        width:screenWidth/3.5,
        height:30,
        borderWidth:1,
        fontSize: 24,
        lineHeight: 32,
        fontFamily:'EBGaramond_500Medium',
        fontStyle:'normal',
        color: '#000',
        fontWeight:'500'
      },

      bottomBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width:screenWidth/2,
       height:45,
        borderLeftWidth:1,
      },

      customButton:{
        width: 150,
        height: 50,
        letterSpacing: 0.5,
        backgroundColor: '#E0314B',
        color: 'white',
       fontSize: 32,
        borderWidth: 1.5,
        borderRadius  : 5,
        },
    
    active:{
        width: 150,
        height: 50,
        letterSpacing: 0.5,
        color: 'white',
        fontSize: 32,
        backgroundColor:'rgba(25, 26, 24,1)',
        borderWidth: 1.5
        }
});
export default DetailScreen;