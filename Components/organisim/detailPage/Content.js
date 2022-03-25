import React from 'react'
import { View } from 'react-native'
//component
import QuantityGrp from '../../molecules/detailPage/QuantityGrp'
import ItemInfoGrp from '../../molecules/detailPage/ItemInfoGrp'
import VariationBtnGrp from '../../molecules/detailPage/VariationBtnGrp'
import SubVariationBtnGrp from '../../molecules/detailPage/SubVariationBtnGrp'
import DetailTxt from '../../atoms/detailsPage/DetailTxt'
//style
import containerStyle from '../../../styles/containerStyle'

//service
import useApi from '../../../Service/ApiContext'
import useDetailOper from '../../../Service/DetailContext'
import react from 'react'

const Content = (props) =>{
    const {detail,isLoading} = useApi();
    const{subvariation,variation,subVariationName,
        variationName,itemCode,price} = useDetailOper();
    
    return(
        <View style={containerStyle.detailContainer}>
              <ItemInfoGrp itemName={detail.itemName} itemPrice={price} itemCost={itemCode}/>
            <View style={{marginHorizontal:7}}>
                <DetailTxt value={variationName}/>
            </View>
            <View style={{flexDirection:'row',}}>
                <VariationBtnGrp variaty={variation}/>
            </View>
            <View style={{marginHorizontal:7}}>
               <DetailTxt value={subVariationName}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <SubVariationBtnGrp variaty={subvariation}/>
            </View>
            <View style={{marginHorizontal:7}}>
                 <DetailTxt value={"Quantity:"}/>
            </View>
            <View style={{marginHorizontal:7}}>
                 <QuantityGrp
             style={{width:20}} />
            </View>
        </View>
    )
}
export default Content;