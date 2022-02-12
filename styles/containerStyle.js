import { StyleSheet,Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
var containerStyle = StyleSheet.create({

    catContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
     
    },
    ProductContainer:{
        flex:1,
        justifyContent: "space-between",
        backgroundColor: "#F0F0F0",
    },
    cardContainer:{
        width:screenWidth/2.1,
        height:screenHeight/3,
        borderRadius:6,
        backgroundColor:"#FFFFFF",
        marginTop:10,
        margin:5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },

    cardImgContainer:{
        borderRadius:6,
        backgroundColor:'black',
    },

    cardInfoContainer:{
        justifyContent: "space-between",
        padding:5,
        marginTop:5,
    }
});

export default containerStyle;