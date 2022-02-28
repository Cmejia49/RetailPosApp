import React from "react";
import { View } from "react-native";
import DateGrp from "../../molecules/dateReport/DateGrp";
import ReportGrp from "../../molecules/dateReport/ReportGrp";

import containerStyle from "../../../styles/containerStyle";
import DateLabel from "../../atoms/button/DateLabel";

const Filter = (props) =>{
    return(
        <View>
        <View style={containerStyle.dateContainer}>
            <View style={{marginLeft:10}}>
                 <DateLabel value={"Date of Report"}/>
            </View>
            <View style={{margin:5}}>
                     <DateGrp text={props.date} onPress={props.pressCalendar}/>
            </View>
       </View>
       <View style={containerStyle.dateContainer}>
            <View style={{marginLeft:10}}>
                 <DateLabel value={"Report"}/>
            </View>
            <View style={{margin:5}}>
                 <ReportGrp text={props.text} onPress={props.onPress}/>
            </View>
       </View>
        </View>

    )
}
/**      <View style={styles.dateContainer}>
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
 */
export default Filter;