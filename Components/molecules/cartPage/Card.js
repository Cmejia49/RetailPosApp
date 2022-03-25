import React from 'react'
import {View,TouchableWithoutFeedback,Image,TouchableOpacity,Text} from 'react-native'

import CartTxt from '../../atoms/cartPage/CartTxt'
import CartPriceTxt from '../../atoms/cartPage/CartPriceTxt'
import CartQntGrp from './CartQntGrp'
import { AntDesign } from '@expo/vector-icons'; 
import containerStyle from '../../../styles/containerStyle'
import imageStyle from '../../../styles/imageStyle'
import useTheme from '../../../Service/ThemeContext'
const Card = (props) =>{
    const{deleteCart} = useTheme();
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.cartCardContainer}>
            <View>
              <Image source={props.logo} style={imageStyle.cartCardImg}/>
            </View>
            <View style={containerStyle.carCardInfoContainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <CartTxt value={props.name}/>
                    <TouchableOpacity
                        
                        onPress={()=>{deleteCart(props.id)}}>
                            <AntDesign name="close" size={18} color="black" />
                    </TouchableOpacity>
            </View>
            <CartTxt value={props.variation}/>
            <CartPriceTxt value={props.price}/>
            <View>
            <CartQntGrp
             dec={props.dec}
             id = {props.id}
             quantity={props.quantity}
             stock={props.stock}
             style={{width:20}} />
            </View>
            <CartPriceTxt value={props.subtotal}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Card;