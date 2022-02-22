import React from 'react';
import {View, FlatList} from 'react-native';

import Card from '../../molecules/cartPage/Card';
import containerStyle from '../../../styles/containerStyle';
import logo from '../../../assets/shoes.png'
const Content = ({data}) =>{
    return(
        <View style={containerStyle.ProductContainer}>
                   <FlatList contentContainerStyle={{ alignItems:'center'}} 
           showsVerticalScrollIndicator={false}
           data={data}
           keyExtractor={({ id }, index) => id}  
           renderItem={({item, index}) =>  
           <Card logo={logo}/>
    } 
           />
        </View>
    )
}

export default Content;