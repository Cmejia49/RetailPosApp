import React, { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';
import { View,Animated,FlatList,ActivityIndicator, } from 'react-native';
import Filter from "../Components/organisim/homePage/Filter";
import Header from "../Components/organisim/homePage/Header";
import { useFocusEffect } from '@react-navigation/native';
import {GetProductUrl,GetCat} from "../Service/URLstring";
import logo from '../assets/shoes.png'
import ProductCard from '../Components/molecules/homePage/ProductCard'
import containerStyle from '../styles/containerStyle';
import 'react-native-gesture-handler';
import useApi from "../Service/ApiContext";

  

const HomeScreen =({navigation}) =>{
  const {product,callEndpoint,getProduct,
    getCategories,error,getHeader,header,getPage,page,getFilterPageName,
    getFilterPageCat,filterPageCat,filterPageName,reset} = useApi();
  
  const [isClicked, setisClicked] = React.useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fetchProduct = async () => {
    try {
    const response = await fetch(GetProductUrl+"?PageNumber="+page+"&Type=GETALL&PageSize=2");
    const json = await response.json();
    const  head = await JSON.parse(response.headers.get("x-pagination"));
    
    getHeader(head);
    console.debug(head);
    getProduct(json)
   } catch (ex) {
     error(ex)
   } 
 }

 
 const fetchCategories = async () => {
  try {
  const response = await fetch(GetCat);
  const json = await response.json();
    getCategories(json)
 } catch (ex) {
   error(ex)
 } 
}

const onEnd = () => {
  if(page < header.TotalPages){
    if(header.Type == "GETALL"){
      getPage(page+1);
    }
  }
  if(filterPageCat < header.TotalPages){
    if(header.Type =="FILTERBYCAT"){
      getFilterPageCat(filterPageCat+1);   
    }
  }

  if(filterPageName < header.TotalPages){
    if(header.Type =="FILTERBYNAME"){
      getFilterPageName(filterPageName+1);
      
    }
  }
}
useFocusEffect(
  React.useCallback(() => {
    callEndpoint();
    fetchCategories();
    fetchProduct();
    return () => {
      reset();
      console.debug('Screen was unfocused');
    };
  },[])
);

useFocusEffect(
  React.useCallback(() => {
    if(header.Type == "GETALL"){
      callEndpoint();
      fetchProduct();
    }
  },[page])
);


  const showSearch = () =>{
    setisClicked(true)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
  }

  const hideSearch = () =>{
    setisClicked(false)
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
         
          {product == null || product == undefined ? <View><ActivityIndicator size="large" color="#00ff00" /></View> : (
        <View style={containerStyle.container}>    
       <Filter/>
           <View style={containerStyle.ProductContainer}>
           <FlatList contentContainerStyle={{alignContent:'center',alignItems:'center',}} 
                showsVerticalScrollIndicator={false}
                data={product}
                 keyExtractor={(item,index) => item.itemId} 
                 onEndReachedThreshold={0.3}
                 onEndReached={onEnd}
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