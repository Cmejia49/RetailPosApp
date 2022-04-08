import React from 'react'
import { View,FlatList,Dimensions,ActivityIndicator } from 'react-native'
import ContentFlatlist from '../../molecules/FlatListPart/ContentFlatlist'
import HeaderFlatlist from '../../molecules/FlatListPart/HeaderFlatlist'
import SeperatorFlatlist from '../../molecules/FlatListPart/SeperatorFlatlist'
import FlalistTxt from '../../atoms/text/FlatlistTxt'
import ExpensesContent from '../../molecules/FlatListPart/ExpensesContent'
import useApi from '../../../Service/ApiContext'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Content = ({reach}) =>{
    const {expenses} = useApi();
    return(
        <View style={{flex:1,height:screenHeight, flexWrap:'wrap',marginVertical:10}}>
             {expenses == null || expenses == undefined ?(
     <View><ActivityIndicator size="large" color="#00ff00" /></View>
             ):(
     <FlatList contentContainerStyle={{width:screenWidth,borderWidth:1,borderTopWidth:0}} 
           data={expenses}
           keyExtractor={(expenses,index) =>expenses.expensesId}    
           onEndReachedThreshold={0.5}
           onEndReached={reach}
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
    )}
           </View>
    )   
}

export default Content;
