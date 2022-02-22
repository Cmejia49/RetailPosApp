import React from 'react'
import { View } from 'react-native'

import QuantityGrp from '../../molecules/detailPage/QuantityGrp'
import ItemInfoGrp from '../../molecules/detailPage/ItemInfoGrp'
import VariationBtnGrp from '../../molecules/detailPage/VariationBtnGrp'
import DetailTxt from '../../atoms/detailsPage/DetailTxt'

import textStyle from '../../../styles/textStyle'
import textInputStyle from "../../../styles/textInputStyle";

import containerStyle from '../../../styles/containerStyle'
const Content = () =>{
    return(
        <View style={containerStyle.detailContainer}>
              <ItemInfoGrp itemName={"TITI"} itemPrice={"$900"} itemCost={"SSD"}/>
              <View style={{marginHorizontal:7}}>
                    <DetailTxt value={"Color:"}/>
                </View>
            <View style={{flexDirection:'row',}}>
                <VariationBtnGrp
                    buttons={["Red", "Blue", "Pink"]}/>
            </View>
            <View style={{marginHorizontal:7}}>
                    <DetailTxt value={"Color:"}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <VariationBtnGrp
                buttons={["011", "012", "013"]} />
            </View>
            <View style={{marginHorizontal:7}}>
                 <DetailTxt value={"Quantity:"}/>
            </View>
            <View style={{marginHorizontal:7}}>
                 <QuantityGrp style={textInputStyle.qntTxtInput} />
            </View>
        </View>
    )
}
/*<View style={{flexDirection:'row'}}>
<Pressable onPress={decrement}
  style={{padding:3,paddingHorizontal:15 ,borderWidth:1,borderRightWidth:0}}>
 <Text>-</Text>
</Pressable>
<TextInput 
   onChangeText={newText => setStockCount(newText)}
defaultValue={stockCount + ""}
style={ styles.inputTxt}textAlign={'center'} textAlignVertical={'center'}/>
<Pressable onPress={increment}
  style={{padding:3,paddingHorizontal:15,borderWidth:1,borderLeftWidth:0}}>
 <Text>+</Text>
</Pressable>
</View>*/
export default Content;