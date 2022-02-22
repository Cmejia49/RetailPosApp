import React from 'react'
import { View } from 'react-native'

import HeaderCartGrp from '../../molecules/HeaderCartGrp';
import HeaderSrchBtn from '../../atoms/HeaderSrchBtn';
const Header = (props) =>{
    return(
        <View style={{flexDirection:'row', marginRight:10}}>
        <View style={{ marginRight:10}}>
          <HeaderCartGrp onPress={props.cart}/>
        </View>
        <View>
          <HeaderSrchBtn onPress={props.search}/>
        </View>
   
      </View>   
    );
}

export default Header;