import React from 'react'
import { View,Modal,Text,Alert,Button,StyleSheet,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


const FailedMessage = ({visible,onPress}) =>{

    return(
        <Modal
        animationType="slide"
        transparent={true}
           backdropOpacity= {1}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}  
      >

<View style = {styles.modal}>  
        <View style={styles.modalInner}>
        <View style={{
            borderWidth:1.5,
            borderRadius:180,
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:100,
            marginTop:10
          }}>
          <AntDesign name="exclamation" size={100} color="black" />
          </View>
          <View>
          <Text style={{
              textAlign:'center',
            fontSize:18,
            fontFamily:"Roboto",
            fontWeight:'700',
            lineHeight:22,
          }}>Warning</Text>
          </View>
          <View>
          <Text style={{
            marginTop:10,
            textAlign:'center',
            fontSize:18,
            fontFamily:"Roboto",
            fontWeight:'700',
            lineHeight:22,
          }}>Please Input Sufficient{"\n"}      
          Amount Recieved</Text>
          </View>
        <View style={{
            flex:1,
            justifyContent:'flex-end',
            marginBottom:20,
            marginHorizontal:50,
        }}>
        <Pressable
            onPress={onPress}
            style={{  
                paddingVertical:10,
              borderWidth:1.5,
              borderRadius: 4,
              backgroundColor: '#FFFFFF',
              borderWidth:1.5,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 5,
              
              elevation: 8,
            }}>
            <Text 
            style={{
                textAlign:'center',
              fontSize:18,
              fontFamily:"Roboto",
              fontWeight:"700",
              lineHeight:21
            }}>OK</Text>
          </Pressable>
        </View>
        </View>
              
          </View>  
        </Modal>
    )
}

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modal: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
   
   },  
   modalInner: {
       flex:0.5,
     borderRadius:24,
    height: 310,
    width: 310,
    alignContent:'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
   text: {  
      color: '#3f2949',  
      marginTop: 10  
   }  
});  


export default FailedMessage;