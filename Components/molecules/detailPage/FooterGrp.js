import React from 'react'
import { View } from 'react-native'
import FooterTxt from '../../atoms/detailsPage/FooterTxt'
import FooterBtn from '../../atoms/detailsPage/FooterBtn'
const FooterGrp = (props) =>{
    return(
        <View>
            <FooterBtn onPress={props.onPress}>
                <FooterTxt {...props}/>
            </FooterBtn>
        </View>
    )
}

export default FooterGrp