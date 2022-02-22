import * as React from 'react';
import { StyleSheet, View,Image,Dimensions  } from 'react-native';
import logo from '../assets/shoes.png'; 
import Content from '../Components/organisim/detailPage/Content';
import Footer from '../Components/organisim/detailPage/Footer';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DetailScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <View>
            <Image source={logo} style={styles.image}/> 
            </View>
            <Content/>

            <Footer onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginTop:10,
    },


    image:{
        alignSelf:'center',
        resizeMode:'cover',
        width:screenWidth,
        height:218
    },
});
export default DetailScreen;