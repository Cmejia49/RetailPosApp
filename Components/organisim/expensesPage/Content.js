import React from 'react'
import { View,FlatList,Dimensions } from 'react-native'
import ContentFlatlist from '../../molecules/FlatListPart/ContentFlatlist'
import HeaderFlatlist from '../../molecules/FlatListPart/HeaderFlatlist'
import SeperatorFlatlist from '../../molecules/FlatListPart/SeperatorFlatlist'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Content = ({data}) =>{
    return(
        <View style={{flex:1,flexWrap:'wrap',marginVertical:10}}>
        <FlatList contentContainerStyle={{width:screenWidth,borderWidth:1,borderTopWidth:0}} 
           data={data}
           keyExtractor={({ id }) => id}    
           ListHeaderComponent={<HeaderFlatlist value="Product">
               <FlalistTxt value={"Amount"}/>
           </HeaderFlatlist>}
           ListHeaderComponentStyle={{ borderColor: '#000', borderBottomWidth:1}}
           stickyHeaderIndices={[0]}
           ItemSeparatorComponent = {SeperatorFlatlist}
           renderItem={({item, index}) =>                        
            <View>
                
            </View>
       }
         />
           </View>
    )   
}

export default Content;
