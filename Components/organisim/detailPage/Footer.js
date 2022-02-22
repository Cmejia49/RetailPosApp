import React from 'react'
import { View } from 'react-native'
import FooterGrp from '../../molecules/detailPage/FooterGrp'
import containerStyle from '../../../styles/containerStyle'
const Footer = (props) =>{
    return(
        <View style={containerStyle.footerContainer}>
                    
                  <View backgroundColor={"#FFF"} borderWidth={1}>
                      <FooterGrp style={{color:"#000",fontFamily:"Roboto",fontSize:17, fontWeight:"400"}}>Damaged</FooterGrp>
                  </View>
                          
                  <View backgroundColor={"#000"}>
                        <FooterGrp onPress={props.onPress}
                         style={{
                             color:"#FFF",
                             fontFamily:"Roboto",
                             fontSize:17, 
                             fontWeight:"400"
                             }}>
                         Confrim
                        </FooterGrp>
                  </View>
        </View>
        
    )
}

export default Footer;