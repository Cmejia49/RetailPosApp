import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, View} from 'react-native';
import 'react-native-gesture-handler';

import ProductCard from '../../molecules/homePage/ProductCard'
import containerStyle from '../../../styles/containerStyle';

import logo from '../../../assets/shoes.png'
const ProductList = (props) =>{
  return(
      <View style={containerStyle.ProductContainer}>
      <FlatList contentContainerStyle={{alignContent:'center',alignItems:'center', paddingBottom: 15}} 
           showsVerticalScrollIndicator={false}
            data={props.data}
            keyExtractor={({ id }, index) => id}  
            numColumns={2}  
            renderItem={({item, index}) =>                        
            <ProductCard 
            onPress={props.onPress}
            imgSrc={logo}/>
        }
          />
      </View>
  )
}

export default ProductList;