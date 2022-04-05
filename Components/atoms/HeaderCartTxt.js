import React from 'react'
import { Text } from 'react-native'
import useTheme from '../../Service/ThemeContext';
const HeaderCartTxt = () =>{
    const {product} = useTheme();
    return(
       <Text style={{  fontWeight: 'bold', fontSize:18}}>{product.length}</Text>
    )
}

export default HeaderCartTxt;