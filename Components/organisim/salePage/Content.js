import React from 'react'
import { View,FlatList,Dimensions,ActivityIndicator } from 'react-native'
import ContentFlatlist from '../../molecules/FlatListPart/ContentFlatlist'
import HeaderFlatlist from '../../molecules/FlatListPart/HeaderFlatlist'
import SeperatorFlatlist from '../../molecules/FlatListPart/SeperatorFlatlist'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
import useApi from '../../../Service/ApiContext'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Content = ({reach}) =>{
    const {sale} = useApi();

    return(
        <View style={{flex:1,flexWrap:'wrap',marginVertical:10}}>
      {sale == null || sale == undefined ?(
     <View><ActivityIndicator size="large" color="#00ff00" /></View>
      ):(
        <FlatList contentContainerStyle={{ width:screenWidth,borderWidth:1,borderTopWidth:0}} 
           data={sale}
           keyExtractor={(item,index) => item.saleId}  
           onEndReachedThreshold={0.2}
           onEndReached={reach} 
           ListHeaderComponent={<HeaderFlatlist value="Product">
               <FlalistTxt value={"Qnt"}/>
               <FlalistTxt value={"Price"}/>
               <FlalistTxt value={"Total"}/>
               <FlalistTxt value={"Cost"}/>
               <FlalistTxt value={"Margin"}/>
           </HeaderFlatlist>}
           ListHeaderComponentStyle={{ borderColor: '#000', borderBottomWidth:1}}
           stickyHeaderIndices={[0]}
           ItemSeparatorComponent = {SeperatorFlatlist}
           renderItem={({item, index}) =>                        
            <ContentFlatlist item={item}/>
       }
         />
      )}
           </View>
    )   
}

export default Content;
