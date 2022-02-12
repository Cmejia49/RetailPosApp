import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Pressable,Button,Alert,TouchableWithoutFeedback,Dimensions  } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'r5c8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'e5x8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'w5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'q5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'z5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'x5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'v5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'cv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'xv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'zv5z8694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];  

const SaleScreen = ({navigation})=>{
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <View style={{flexDirection:'row', marginRight:10}}>
            <View style={{ marginRight:10}}>
            <AntDesign.Button name="shoppingcart"  
           borderWidth={1} 
           size={24} 
           backgroundColor = "#FFFFFF" 
           color="black"
         
           iconStyle={
           {marginRight: 5,}
           } 
         
           >
             <Text style={{  fontWeight: 'bold', fontSize:18}}>4</Text>
           </AntDesign.Button>
            </View>

             <AntDesign.Button  name="search1"
           borderWidth={1} 
           size={24}
           backgroundColor = "#FFFFFF" 
           color="#000"
           iconStyle={
           {
            margin:0,
            marginRight:0
           }
           } 
       
           />
       
          </View>             

      ),
    });
  }, [navigation]);
    return(
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <View style={{marginLeft:10}}>
                <Text style = {{margin:5,fontFamily:'Roboto',fontSize:16, fontWeight:'bold'}}>Date of Report</Text>
                </View>
                <View style={{margin:5}}>
                <Pressable 
                onPress={()=> Alert.alert("Cancel")}
                style={styles.button}>
                    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                    <AntDesign name="calendar" size={25} color="black" margin={10} />
                    <Text 
                    style={{fontWeight: 'bold', fontSize:14,fontFamily:'Roboto', 
                    marginLeft:10, lineHeight:17}}>
                        01-22-2022
                    </Text>
                    </View>
            
                </Pressable>        
                </View>
            </View>

            <View style={styles.dateContainer}>
                <View style={{marginLeft:10}}>
                <Text style = {{margin:5,fontFamily:'Roboto',fontSize:16, fontWeight:'bold'}}>Report:</Text>
                </View>
                <View style={{margin:5}}>
                <Pressable 
                onPress={()=> Alert.alert("Cancel")}
                style={styles.button}>
                    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                    <AntDesign name="calendar" size={25} color="black" margin={10} />
                    <Text 
                    style={{fontWeight: 'bold', fontSize:14,fontFamily:'Roboto', 
                    marginHorizontal:5, lineHeight:17}}>
                        Today
                    </Text>
                     <MaterialIcons name="keyboard-arrow-down" size={25} color="black" stleic/>
                    </View>   
                </Pressable>        
                </View>
            </View>
            <View style={{flex:1,flexWrap:'wrap',marginVertical:10}}>
         <FlatList contentContainerStyle={{width:screenWidth,borderWidth:1,borderTopWidth:0}} 
            data={DATA}
            keyExtractor={({ id }) => id}    
            ListHeaderComponent={FlatList_Header}
            ListHeaderComponentStyle={{ borderColor: '#000', borderBottomWidth:1}}
            stickyHeaderIndices={[0]}
            ItemSeparatorComponent = {FlatListItemSeparator }
            renderItem={({item, index}) =>                        
            saleRecord()//this is a main view
        }
          />
            </View>
            <View style={styles.dateContainer}>
            <View style={{
          flex:1,
          flexWrap:'wrap',
        
        height: 45,
        width: "100%",
        backgroundColor: "#FFF",
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
      }}>
          <View style={{
              flex:1,
              flexWrap:'wrap',
          }}>
          <Text style={{ 
            fontSize: 18,
            color:"#000",
            fontFamily:'Roboto',
            fontWeight:'700',
            lineHeight:22,
            margin:5
            }}>
              Total
            </Text>
          </View>
        <View style={{
            flex:1,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-evenly',
        }}>

      <Text style={{ 
            fontSize: 12,
            color:"#000",
            fontFamily:'Roboto',
            fontWeight:'700',
            lineHeight:22,
            }}>
              60
            </Text> 
            <Text style={{ 
            fontSize: 12,
            color:"#000",
            fontFamily:'Roboto',
            fontWeight:'700',
            lineHeight:22,
            }}>
             900
            </Text> 
            <Text style={{ 
            fontSize: 12,
            color:"#000",
            fontFamily:'Roboto',
            fontWeight:'700',
            lineHeight:22,
            }}>
               ESSS
            </Text> 
            <Text style={{ 
            fontSize: 12,
            color:"#000",
            fontFamily:'Roboto',
            fontWeight:'700',
            lineHeight:22,
            }}>
              3500
            </Text> 
        </View>
      </View>
            </View>
        </View>
    );
}

const FlatList_Header = () => {
    return (
      <View style={{
          flex:1,
          flexWrap:'wrap',
        borderTopWidth:1,
        height: 45,
        width: "100%",
        backgroundColor: "#FFF",
        alignItems: 'center',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}>
          <View style={{
              flex:1,
              flexWrap:'wrap',
          }}>
          <Text style={{ fontSize: 12,color:"#000", marginLeft:5}}>Product</Text>
          </View>
        <View style={{
            flex:1,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'flex-start',
            justifyContent:'space-evenly',
        }}>

        <Text style={styles.flatlistHeaderText}>Qnt</Text> 
        <Text style={styles.flatlistHeaderText}>Total</Text>
        <Text style={styles.flatlistHeaderText}>Cost</Text>
        <Text style={styles.flatlistHeaderText}>Margin</Text>
        </View>
      </View>
    );
  }

  const FlatListItemSeparator = () => {
    return (
        <View
        style={{
          height:1,
          borderWidth:1,
          width: "100%",
          backgroundColor: "black",
        }}
      />
    );
  }

const saleRecord=()=>{
    return(           

        <TouchableWithoutFeedback>
          <View style={{
          flex:1,
          flexWrap:'wrap',
        
        height: 45,
        width: "100%",
        backgroundColor: "#FFF",
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
      }}>
          <View style={{
              flex:1,
              flexWrap:'wrap',
          }}>
          <Text style={{ fontSize: 12,color:"#000",marginLeft:5}}>Shoes,11,red</Text>
          </View>
        <View style={{
            flex:1,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-evenly',
        }}>

        <Text style={styles.flatlistHeaderText}>6</Text> 
        <Text style={styles.flatlistHeaderText}>900</Text>
        <Text style={styles.flatlistHeaderText}>DSD</Text>
        <Text style={styles.flatlistHeaderText}>350</Text>
        </View>
      </View>
     </TouchableWithoutFeedback>
    );
        
    
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF4F4",
        paddingTop:5,
    },
    
    dateContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        margin:5,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.30,
        shadowRadius:4 ,
        elevation:8,
    },
    dateTxt:{
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        fontWeight:'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        borderWidth:1.5,
        margin:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        
        elevation: 8,
      },

      flatlistHeaderText:{
        color:'#000',
        fontFamily:'Roboto',
        fontStyle:'normal',
        lineHeight:14.5,
        fontWeight:'400',
    
      },

})
export default SaleScreen;