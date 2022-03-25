import React from 'react';
import {View, FlatList} from 'react-native';

import Card from '../../molecules/cartPage/Card';
import containerStyle from '../../../styles/containerStyle';
import logo from '../../../assets/shoes.png'
import useTheme from '../../../Service/ThemeContext';
const Content = () =>{
    const { product }  = useTheme();
    return(
        <View key={product.cartId}style={containerStyle.ProductContainer}>
                   <FlatList contentContainerStyle={{ alignItems:'center'}} 
           showsVerticalScrollIndicator={false}
           data={product}
           keyExtractor={({ id }, index) => id}  
           renderItem={({item,index}) =>  
           <Card
           id = {item.cartId}
           quantity={item.Quantity}
           stock={item.stock}
           logo={logo}
           name={item.name}
           variation={"Variation:"+item.variationValue +","+item.subVariationValue}
           price={item.Price}
           subtotal={item.subtotal}/>
    } 
           />
        </View>
    )
}

export default Content;