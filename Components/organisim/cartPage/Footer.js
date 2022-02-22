import React from 'react'
import { View,Text } from 'react-native'
import CheckOut from '../../molecules/cartPage/CheckOut'
import FooterTxt from '../../atoms/cartPage/FooterTxt'
import containerStyle from '../../../styles/containerStyle'
import textStyle from '../../../styles/textStyle'
const Footer = (props) =>{
    return(
        <View style={containerStyle.cartFooterContainer}>
            <View style={{flex:1}}backgroundColor={'#FFFFFF'}>
            <FooterTxt style={textStyle.footerTxtBlack}>{props.total}</FooterTxt>
            </View> 
               <CheckOut event={props.event} value={props.value}/>
        </View>
        
    )
}

export default Footer;