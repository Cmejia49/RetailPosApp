import React, { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';
import { View,Animated,FlatList,ActivityIndicator,TextInput } from 'react-native';
import Filter from "../Components/organisim/homePage/Filter";
import ProductList from "../Components/organisim/homePage/ProductList";
import Header from "../Components/organisim/homePage/Header";

import {GetProductUrl,GetCat} from "../Service/URLstring";
import logo from '../assets/shoes.png'
import ProductCard from '../Components/molecules/homePage/ProductCard'
import containerStyle from '../styles/containerStyle';
import textInputStyle from'../styles/textInputStyle';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import useApi from "../Service/ApiContext";


  

const HomeScreen =({navigation}) =>{
  const {product,categories,isLoading,callEndpoint,getProduct,getCategories,error,reset} = useApi();
  
  const [isClicked, setisClicked] = React.useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fetchProduct = async () => {
    callEndpoint();
    try {
    const response = await fetch(GetProductUrl);
    const json = await response.json();
    getProduct(json)
   } catch (ex) {
     error(ex)
   } 
 }

 
 const fetchCategories = async () => {
  callEndpoint();
  try {
  const response = await fetch(GetCat);
  const json = await response.json();
    getCategories(json)
 } catch (ex) {
   error(ex)
 } 
}

 React.useEffect(() => {
  fetchCategories();
  fetchProduct();
},[]);

  const showSearch = () =>{
    setisClicked(true)
    console.debug("show")
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
  }

  const hideSearch = () =>{
    setisClicked(false)
    console.debug("hide")
    Animated.timing(fadeAnim,{
      toValue:0,
      duration:500,
      useNativeDriver: true
    }).start();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Header cart={() => navigation.navigate("Cart")}
         search={isClicked != true ? showSearch:hideSearch}/>
        </View>

      )
     })
  }, [navigation, isClicked]);

    let [fontsLoaded] = useFonts({
        EBGaramond_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
   
    return(
      
      <Animated.View
      flex={1}
      style={[
        containerStyle.fadingContainer,
        {
          transform: [{
            translateY:fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [-50,0] 
            }),
          }],
        }
      ]}>
         
          {product == null || product == undefined ? <ActivityIndicator/> : (
        <View style={containerStyle.container}>    
       <Filter/>
           <View style={containerStyle.ProductContainer}>
           <FlatList contentContainerStyle={{alignContent:'center',alignItems:'center',}} 
                showsVerticalScrollIndicator={false}
                data={product}
                 keyExtractor={(item,index) => item.itemId}  
                 numColumns={2}  
                 renderItem={({item, index}) =>                        
                 <ProductCard 
                 item={item}
                 onPress={()=>{ navigation.navigate("Detail",{paramKey:item.itemId})}}
                 imgSrc={logo}/>
             }
               />

           </View>
        </View>
          )}
        </Animated.View>

    )
}
export default HomeScreen