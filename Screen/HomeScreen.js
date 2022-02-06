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
              {
                id: 'ad58694a0f-3da1-471f-bd96-145571e29d72ss',
                title: 'Third Item',
              },
              {
                id: 'azx58694a0f-3da1-471f-bd96-145571e29d72ss',
                title: 'Third Item',
              },

          ];    
const HomeScreen =({navigation}) =>{
  const [isClicked, setisClicked] = React.useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [count, setCount] = React.useState(0);

  const showSearch = () =>{
    setisClicked(true)
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
  }

  const hideSearch = () =>{
    setisClicked(false)
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:500,
      useNativeDriver: true
    }).start();
  }
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10}}>
            <View style={{ marginRight:10}}>
            <AntDesign.Button name="shoppingcart"  
           borderWidth={1} 
           size={24} 
           backgroundColor = "#FFFFFF" 
           color="black"
         
           iconStyle={
           {marginRight: 5,}
           } 
           onPress={isClicked != true ? showSearch:hideSearch}
           >
             <Text style={{  fontWeight: 'bold', fontSize:18}}>4</Text>
           </AntDesign.Button>
            </View>

             <AntDesign.Button  name="search1"
           borderWidth={1} 
           size={24}
           backgroundColor = "#FFFFFF" 
           color="#000"
           iconStyle={
           {
            margin:0,
            marginRight:0
           }
           } 
           onPress={isClicked != true ? showSearch:hideSearch}
           />
       
          </View>             

      ),
    });
  }, [navigation, isClicked]);

    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
   
    return(
      <Animated.View
      style={[
        styles.fadingContainer,
        {
          // Bind opacity to animated value
          transform: [{
            translateY:fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [0, -50] // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],
        }
      ]}
    >
        <View style={styles.container}>    
             <StatusBar
              backgroundColor="#F0F0F0" />
              <View style={{flexDirection:'row'}}>
              <AntDesign.Button name="search1"  
             size={24} 
             backgroundColor='rgba(255, 255, 255, 0.62)'
             color='rgba(206, 11, 255, 0.58)'
             iconStyle={
             {marginRight: 0,
              fontWeight:'bold'
             }
             } 
             />
              <TextInput style={styles.searchTxt} placeholder="Search for..."/>
              </View>
              <View style={{marginTop:10, justifyContent:'center'}}>
              <ScrollView
               showsHorizontalScrollIndicator={false}
             contentContainerStyle={{
                justifyContent:"space-between",
            }}
             horizontal={true}
            alwaysBounceHorizontal={true}>
            <View style={styles.catContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button}>
                  <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button}>
            <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} >
            <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button}>
            <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} >
            <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
            <Pressable style={styles.button} >
            <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <Pressable style={styles.button}>
                <Text style={styles.text}>CatA</Text>
                </Pressable>
            </View>
           
            </View>
            </ScrollView>
              </View>
       
         <View style={styles.itemContainer}>
         <FlatList contentContainerStyle={{ paddingBottom: 20}} 
           showsVerticalScrollIndicator={false}
            data={DATA}
            keyExtractor={({ id }, index) => id}  
            numColumns={2}  
            renderItem={({item, index}) =>                        
          ProductCard()//this is a main view
        }
          />
         </View>
        </View>
        </Animated.View>

    )
}
//Start Product Card
const ProductCard=()=>{
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

//End of Product Card
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F0F0F0",
        paddingTop:5,
     
    },
    fadingContainer: {
      flexDirection:'row',
    },
    fadingText: {
      fontSize: 28
    },
    searchTxt:{
     // borderWidth:1,
      fontSize:24,
      fontWeight:'400',
      fontFamily:'Roboto',
      width:screenWidth,
      height:42,
      backgroundColor:'rgba(255, 255, 255, 0.62)'
    },
    catContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
     
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        borderWidth:1,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily:'Roboto',
        fontStyle:'normal',
        color: '#000',
      },
    itemContainer: {
        height:screenHeight-130,
        alignItems:'center',
        justifyContent: "space-between",
        backgroundColor: "#F0F0F0",
    },
    mainCardView: {
        width:screenWidth/2.1,
        height:screenHeight/3,
        borderRadius:6,
        backgroundColor:"#FFFFFF",
        marginTop:10,
        margin:5,
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
        width:screenWidth/2.1,
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
export default HomeScreen