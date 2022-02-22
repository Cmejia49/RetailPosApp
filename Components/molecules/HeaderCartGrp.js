import React from 'react'

import HeaderCartTxt from '../atoms/HeaderCartTxt';
import HeaderCartBtn from '../atoms/HeaderCartBtn';
import { View,Text } from 'react-native';

const HeaderCartGrp = (props) =>{
    return(
        <View>
             <HeaderCartBtn onPress={props.onPress}>
                 <HeaderCartTxt/>
             </HeaderCartBtn>       
        </View>
    )
}

export default HeaderCartGrp;
