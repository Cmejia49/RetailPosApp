import React from 'react'
import { View } from 'react-native'

import ItemNameTxt from '../../atoms/detailsPage/ItemNameTxt'
import ItemPriceTxt from '../../atoms/detailsPage/ItemPriceTxt'
import ItemCostTxt from '../../atoms/detailsPage/ItemCostTxt'

const ItemInfoGrp = ({itemName,itemPrice,itemCost}) =>{
    return(
        <View>
            <ItemNameTxt value={itemName}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <ItemPriceTxt value={itemPrice}/>
                <ItemCostTxt value={itemCost}/>
            </View>
        </View>
    )
}

export default ItemInfoGrp;
