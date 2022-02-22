import React, { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useFonts,EBGaramond_400Regular} from '@expo-google-fonts/eb-garamond';
import HeaderCartGrp from "../Components/molecules/HeaderCartGrp";
import { View,Animated,Alert, } from 'react-native';
import Categories from "../Components/organisim/homePage/Filter";
import ProductList from "../Components/organisim/homePage/ProductList";
import Header from "../Components/organisim/homePage/Header";

import containerStyle from "../styles/containerStyle";

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
  const [isClicked, setisClicked] = React.useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
        <View>
              <Header cart={() => navigation.navigate("Cart")}
       search={isClicked != true ? showSearch:hideSearch}/>
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
      flex={1}
      style={[
        containerStyle.fadingContainer,
        {
          // Bind opacity to animated value
          transform: [{
            translateY:fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [0, 50] 
            }),
          }],
        }
      ]}
    >
        <View style={containerStyle.container}>    
             <StatusBar backgroundColor="#F0F0F0" />
              <Categories data={DATA}/>
              <ProductList 
              onPress={() => navigation.navigate("Detail")}
              data={DATA}/>
        </View>
        </Animated.View>

    )
}
export default HomeScreen