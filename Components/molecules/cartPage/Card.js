import React from 'react'
import {View,TouchableWithoutFeedback,Image} from 'react-native'

import CartTxt from '../../atoms/cartPage/CartTxt'
import CartPriceTxt from '../../atoms/cartPage/CartPriceTxt'
import QuantityGrp from '../detailPage/QuantityGrp'

import containerStyle from '../../../styles/containerStyle'
import imageStyle from '../../../styles/imageStyle'
import textInputStyle from '../../../styles/textInputStyle'
const Card = (props) =>{
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.cartCardContainer}>
            <View>
              <Image source={props.logo} style={imageStyle.cartCardImg}/>
            </View>
            <View style={containerStyle.carCardInfoContainer}>
            <CartTxt value={"Red Shoes"}/>
            <CartTxt value={"Variation: Red,11"}/>
            <CartPriceTxt value={"#150.00"}/>
            <View>
            <QuantityGrp style={{width:20}} />
            </View>
            <CartPriceTxt value={"$150.00"}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Card;