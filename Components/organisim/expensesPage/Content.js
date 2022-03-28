import React from 'react'
import { View,FlatList,Dimensions } from 'react-native'
import ContentFlatlist from '../../molecules/FlatListPart/ContentFlatlist'
import HeaderFlatlist from '../../molecules/FlatListPart/HeaderFlatlist'
import SeperatorFlatlist from '../../molecules/FlatListPart/SeperatorFlatlist'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
import ExpensesContent from '../../molecules/FlatListPart/ExpensesContent'
import useApi from '../../../Service/ApiContext'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Content = () =>{
    const {expenses} = useApi();
    return(
        <View style={{flex:1,flexWrap:'wrap',marginVertical:10}}>
        <FlatList contentContainerStyle={{width:screenWidth,borderWidth:1,borderTopWidth:0}} 
           data={expenses}
           keyExtractor={(expenses,index) =>index}    
           ListHeaderComponent={<HeaderFlatlist value="Detail">
               <FlalistTxt value={"Amount"}/>
               <FlalistTxt value={"Date"}/>
           </HeaderFlatlist>}
           ListHeaderComponentStyle={{ borderColor: '#000', borderBottomWidth:1}}
           stickyHeaderIndices={[0]}
           ItemSeparatorComponent = {SeperatorFlatlist}
           renderItem={({item, index}) =>                        
           <ExpensesContent item={item}/>
       }
         />
           </View>
    )   
}

export default Content;
