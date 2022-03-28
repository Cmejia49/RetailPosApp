
import * as React from 'react';
import { View,StyleSheet  } from 'react-native';
import Footer from '../Components/organisim/damagePage/Footer'
import Content from "../Components/organisim/damagePage/Content"
import Filter from "../Components/organisim/damagePage/Filter"
import FilterMessage from '../Components/organisim/popUp/FilterMessage'
import RadioButton from '../Components/organisim/popUp/RadioButton';
import Calendar from '../Components/organisim/popUp/Calendar';
import moment from 'moment';
import {FilterOption} from '../Data/FilterOption'
import { GetDamageEndPoint } from '../Service/URLstring';

import useApi from '../Service/ApiContext';

const DamageScreen = ({navigation})=>{

  const {token,getDamage,error,callEndpoint} = useApi();

  const [value, setValue] = React.useState()
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [date,setDate] = React.useState("");


const filterDamageByDay = async(day)=>{
  try {
    callEndpoint();
    const response = await fetch(GetDamageEndPoint+"/"+"day?day="+day,{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+token,
        'Accept': '*/*',
      }
    })
    const json = await response.json();
    getDamage(json);
   } catch (ex) {
    error(ex)
   } 
}

const filterDamageByDate = async(date)=>{
  try {
    callEndpoint();
    const response = await fetch(GetDamageEndPoint+"/"+"date?date="+date,{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+token,
        'Accept': '*/*',
      }
    })
    const json = await response.json();
    getDamage(json);
   } catch (ex) {
    error(ex)
   } 
}

React.useEffect(()=>{
  handleConfirm();
},[])
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  setDate(moment(date).format('MM/DD/YYYY') );
  filterDamageByDate(moment(date).format('MM/DD/YYYY') )
  hideDatePicker();
};
    return(
        <View style={styles.container}>
            <Calendar
              visible={isDatePickerVisible}
              onConfrim={handleConfirm}
              onCancel={hideDatePicker}
            />
       <FilterMessage visible={modalVisible}>
        {FilterOption.map((res,index) => {
         return(
              <RadioButton
              key={res.key}
              id={res.key}
              text={res.text}
              value={value}
             onPress={()=>{
              filterDamageByDay(res.key)
               setValue(res.key)
               setModalVisible(!modalVisible);
               setText(res.text)
              }}/>
              );        
            })}
        </FilterMessage>
              <Filter text={text} 
              date={date}
              pressCalendar={showDatePicker}
              onPress={()=>setModalVisible(true)}
              />
              <Content/>
              <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#FFF4F4",
      paddingTop:5,
  },
  
 

})

export default DamageScreen;