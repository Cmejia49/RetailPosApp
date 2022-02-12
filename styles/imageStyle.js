import { StyleSheet,Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

var imageStyle = StyleSheet.create({
 cardImg:{
    resizeMode: "cover",
    width:screenWidth/2.1,
    height:screenHeight/5,
    borderRadius:6,
 },
});


export default imageStyle;