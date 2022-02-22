import React from 'react'

import FooterBtn from '../../atoms/cartPage/FooterBtn'
import FooterTxt from '../../atoms/cartPage/FooterTxt'
import textStyle from '../../../styles/textStyle'
const CheckOut = (props) =>{
    return(
        <FooterBtn event={props.event}>
            <FooterTxt style={textStyle.footerTxtWhite}>{props.value}</FooterTxt>
        </FooterBtn>
    )
}

export default CheckOut