import React from 'react'
import { View,FlatList,Dimensions } from 'react-native'
import DamageContent from '../../molecules/FlatListPart/DamageContent'
import HeaderFlatlist from '../../molecules/FlatListPart/HeaderFlatlist'
import SeperatorFlatlist from '../../molecules/FlatListPart/SeperatorFlatlist'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import useApi from '../../../Service/ApiContext'
const Content = () =>{
    const{damage} = useApi()
    return(
        <View style={{flex:1,flexWrap:'wrap',marginVertical:10}}>
        <FlatList contentContainerStyle={{width:screenWidth,borderWidth:1,borderTopWidth:0}} 
           data={damage}
           keyExtractor={(damage,index) => damage.damageId}    
           ListHeaderComponent={<HeaderFlatlist value="Product">
                <FlalistTxt value={"Qnt"}/>
               <FlalistTxt value={"Cost"}/>
               <FlalistTxt value={"Margin"}/>
           </HeaderFlatlist>}
           ListHeaderComponentStyle={{ borderColor: '#000', borderBottomWidth:1}}
           stickyHeaderIndices={[0]}
           ItemSeparatorComponent = {SeperatorFlatlist}
           renderItem={({item, index}) =>                        
            <DamageContent item={item}/>
       }
         />
           </View>
    )   
}

export default Content;
