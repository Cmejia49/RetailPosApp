import React from'react'
import {View,Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FlalistTxt from '../../atoms/text/FlatlistTxt'

import containerStyle from '../../../styles/containerStyle'
import useDamage from '../../../Service/DamageContext'


const DamageContent = ({item}) =>{
const{getCost,getQuantity,cost,reset} = useDamage();
    React.useEffect(()=>{
        getQuantity(item.quantity);
        getCost(item.itemCode);
        return()=>{reset()}
    },[item])

    const converter =(str)=>{
        if(str == null){
            return 0;
        }
        let s = '';
        const shopCode = "SDANTEMOJI"
        for(let i = 0;i<str.length;i++)
        {
            for(let j =0;j<shopCode.length;j++)
            {
                if(str.charAt(i) == shopCode.charAt(j))
                {
                 
                      s+=''+shopCode.indexOf(shopCode.charAt(j))
                }
            }
        }
        return s;
    }
    return(
        <TouchableWithoutFeedback>
        <View style={containerStyle.flContentContainer}>
                <View style={{flex:1, flexWrap:'wrap',}}>
                <Text  
        
                 numberOfLines={1}
    adjustsFontSizeToFit style={{marginLeft:10}}>{item.productName}</Text>
          </View>
        <View style={{
            flex:1.2,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'flex-start',
            justifyContent:'space-evenly',
        }}>
                <FlalistTxt value={item.quantity}/>
                <FlalistTxt value={item.itemCode}/>
                <FlalistTxt value={converter(item.itemCode) * item.quantity}/>
    
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default DamageContent;