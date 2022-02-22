import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import 'react-native-gesture-handler';

import CatBtnGrp from '../../molecules/homePage/CatBtnGrp'
import SearchForm from '../../molecules/SearchForm';
import containerStyle from '../../../styles/containerStyle';

const Categories = ({data}) =>{
    return(
        <View style={{marginTop:0, justifyContent:'center'}}>
            <SearchForm/>
        <ScrollView style={{marginTop:5}}
        showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
         justifyContent:"space-between",
         }}
      horizontal={true}
     alwaysBounceHorizontal={true}>
     <View style={containerStyle.catContainer}>
     <CatBtnGrp
         buttons={data}
         />
     </View>
     </ScrollView>
     </View>

    )
}

export default Categories;