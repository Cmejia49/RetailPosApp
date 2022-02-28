import { StyleSheet,Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

var textInputStyle = StyleSheet.create({
    srchTxtInput:{
        // borderWidth:1,
         fontSize:24,
         fontWeight:'400',
         fontFamily:'Roboto',
         width:screenWidth,
         height:42,
         backgroundColor:'rgba(255, 255, 255, 0.62)'
       },

     //Detail
     qntTxtInput:{
      width:screenWidth/6,
      height:30,
      borderWidth:1,
      fontSize: 18,
      lineHeight: 32,
      fontFamily:'serif',
      fontStyle:'normal',
      color: '#000',
      fontWeight:'500'
     } , 
     //default
   inputTxt: {
      margin:10,
      height:52,
      borderWidth:1,
      fontSize: 24,
      lineHeight: 32,
      fontFamily:'Roboto',
      fontStyle:'normal',
      color: '#000',
      fontWeight:'500',
      textAlign:'center',
    },
  
    multiLineInput:{
            flex:1,
            borderWidth:1,
            margin:10,
            textAlignVertical:'top',
            padding:5,
            fontFamily:'Roboto',
            fontWeight:'300',
            fontStyle:'normal',
            fontSize:14,
            lineHeight:17,
    }
});


export default textInputStyle;