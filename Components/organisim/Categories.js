import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import 'react-native-gesture-handler';
import CatBtnGrp from '../molecules/CatBtnGrp';
import containerStyle from '../../styles/containerStyle';
const Categories = ({data}) =>{
    return(
        <ScrollView
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
    )
}

export default Categories;