
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
import { DamageProvider } from '../Service/DamageContext';
import useApi from '../Service/ApiContext';
import { useIsFocused } from "@react-navigation/native";

const DamageScreen = ()=>{

  const isFocused = useIsFocused();

  const {token,getDamage,error,reset,callEndpoint,getFilterPageName,getHeader,
    filterPageName,getFilterPageCat,filterPageCat,header} = useApi();

  const [value, setValue] = React.useState()
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dates,setDate] = React.useState("");


const filterDamageByDay = async(day)=>{
  let filterPageDay = filterPageCat;
  try {
    if(filterPageDay > header.TotalPages){
      filterPageDay = 1 ;
    }
    const response = await fetch(GetDamageEndPoint+"/"+"day?day="+day+"&PageNumber="+filterPageDay+"&Type=FILTERBYDAY&PageSize=2",{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+token,
        'Accept': '*/*',
      }
    })
    const json = await response.json();
    const head = await JSON.parse(response.headers.get("x-pagination"));
    getHeader(head);
    console.debug(head);
    getDamage(json);
   } catch (ex) {
    error(ex)
   } 
}

const filterDamageByDate = async(date)=>{
  let filterPageDate = filterPageName;
  try {
    if(filterPageDate > header.TotalPages){
      filterPageDate = 1 ;
    }
    const response = await fetch(GetDamageEndPoint+"/"+"date?DateTime="+date+"&PageNumber="+filterPageDate+"&Type=FILTERBYDATE&PageSize=2",{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+token,
        'Accept': '*/*',
      }
    })
    const json = await response.json();
    const head = await JSON.parse(response.headers.get("x-pagination"));
    getHeader(head);
    console.debug(head);
    getDamage(json);

   } catch (ex) {
    error(ex)
   } 
}
const onEnd =  () => {
  if(filterPageCat <= header.TotalPages){
    if(header.Type == "FILTERBYDAY"){
       getFilterPageCat(filterPageCat+1);    
    }
  }

  if(filterPageName <= header.TotalPages){
    if(header.Type == "FILTERBYDATE"){
       getFilterPageName(filterPageName+1);    
    }
  }

}

React.useEffect(()=>{
  if(isFocused){ 
    callEndpoint();
    handleConfirm();
    }
  
},[isFocused])

React.useEffect(()=>{
  if(isFocused){ 
  if(header.Type == "FILTERBYDAY"){
  callEndpoint();
  filterDamageByDay(value)
  }
}
},[filterPageCat])

React.useEffect(()=>{
  if(isFocused){ 
  if(header.Type == "FILTERBYDATE"){
    callEndpoint();
    filterDamageByDate(dates);    
  }
}
},[filterPageName])

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  if(dates != moment(date).format('MM/DD/YYYY')){
  reset();
  setDate(moment(date).format('MM/DD/YYYY') );
  filterDamageByDate(moment(date).format('MM/DD/YYYY') )
  hideDatePicker();
  }
  setValue("Today")
  setText("Today")
  hideDatePicker();
};
    return(
      <DamageProvider>
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
              if(value != res.key){
               reset()
               filterDamageByDay(res.key)
               setValue(res.key)
               setModalVisible(!modalVisible);
               setText(res.text)
              }
              setModalVisible(!modalVisible);
              }}/>
              );        
            })}
        </FilterMessage>
              <Filter text={text} 
              date={dates}
              pressCalendar={showDatePicker}
              onPress={()=>setModalVisible(true)}
              />
              <Content
              reach={onEnd}/>
              <Footer/>
        </View>
        </DamageProvider>
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