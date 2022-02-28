import React from 'react'
import { View } from 'react-native'
import FooterGrp from '../../molecules/detailPage/FooterGrp'
import containerStyle from '../../../styles/containerStyle'
const Footer = (props) =>{
    return(
        <View style={containerStyle.footerContainer}>
                    
                  <View backgroundColor={"#FFF"} borderWidth={1}>
                      <FooterGrp onPress={props.addDamage}
                       style={{color:"#000",
                       fontFamily:"Roboto",
                       fontSize:17, 
                       fontWeight:"400"}}>Add to Damage</FooterGrp>
                  </View>
                          
                  <View backgroundColor={"#000"}>
                        <FooterGrp onPress={props.addCart}
                         style={{
                             color:"#FFF",
                             fontFamily:"Roboto",
                             fontSize:17, 
                             fontWeight:"400"
                             }}>
                         Add To Cart
                        </FooterGrp>
                  </View>
        </View>
        
    )
}

export default Footer;