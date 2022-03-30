import React from 'react'
import { View,Modal,Text,Alert,StyleSheet,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import useDetailOper from '../../../Service/DetailContext';

const InputMessage = ({visible,onPress,navigate}) =>{
  const{subVariationValue, variationValue} = useDetailOper()
  const{getInputPrice, inputPrice} = useDetailOper();
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
              marginHorizontal:10,
          }}>
            <Text style={{
              margin:5,
              fontFamily:'serif',
              fontSize:18,
              lineHeight:24,
              fontWeight:"400"
              }}>Product: Shoes</Text>
            <Text style={{
                   margin:5,
              fontFamily:'serif',
              fontSize:18,
              lineHeight:24,
              fontWeight:"400"
              }}>Variation:{variationValue}</Text>
            <Text style={{
                   margin:5,
              fontFamily:'serif',
              fontSize:18,
              lineHeight:24,
              fontWeight:"400"
              }}>SubVariation: {subVariationValue}</Text>
          </View>
          <View style={{
              justifyContent:'flex-start', 
              marginHorizontal :50}}>
            <TextInput placeholder="Enter amount" textAlign="center" borderWidth={1.5} padding={5}
              onChangeText={x => getInputPrice(x)}
              value={inputPrice}
           style={{
              fontSize:24,
              fontFamily:"serif",
              fontWeight:"700",
              lineHeight:32
            }}
            />
          </View>
        
        <View style={{
            flexDirection:'row',
            justifyContent:'space-evenly',
            marginBottom:10,
             }}>
        <Pressable
         onPress={onPress}
            style={{  
              borderWidth:1.5,
              paddingHorizontal: 30,
              paddingVertical:8,
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
              fontSize:18,
              fontFamily:"Roboto",
              fontWeight:"700",
              lineHeight:21
            }}>Cancel</Text>
          </Pressable>
          <Pressable
          onPress={navigate}
            style={{  
              borderWidth:1.5,
              paddingHorizontal: 30,
              paddingVertical:8,
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
              fontSize:18,
              fontFamily:"Roboto",
              fontWeight:"700",
              lineHeight:21
            }}>Confirm</Text>
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
    justifyContent:'space-evenly',
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


export default InputMessage;