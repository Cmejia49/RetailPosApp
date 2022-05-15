
import * as React from 'react';
import { View,StyleSheet  } from 'react-native';
import Footer from '../Components/organisim/damagePage/Footer'
import Content from "../Components/organisim/damagePage/Content"
import Filter from "../Components/organisim/damagePage/Filter"
import FilterMessage from '../Components/organisim/popUp/FilterMessage'
import RadioButton from '../Components/organisim/popUp/RadioButton';
import Calendar from '../Components/organisim/popUp/Calendar';
import moment from 'moment';
import {FilterOption} from '../Data/FilterOption';
import { DamageProvider } from '../Service/DamageContext';
import useApi from '../Service/ApiContext';
import { useFocusEffect } from '@react-navigation/native';
import { fetchDamageByDay, fetchDamageByDate } from "../Service/FetchService";

const DamageScreen = ()=>{

  const {token,getDamage,error,reset,callEndpoint,getFilterPageName,getHeader,
    filterPageName,getFilterPageCat,filterPageCat,header} = useApi();

  const [value, setValue] = React.useState('Today')
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
    await fetchDamageByDay(day,filterPageDay,token).then(res =>{
      getHeader(res[0]);
      getDamage(res[1]);
   }).catch(err=>{
     error(err)
   })
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
    await fetchDamageByDate(date,filterPageDate,token).then(res =>{
      getHeader(res[0]);
      getDamage(res[1]);
   }).catch(err=>{
     error(err)
   })
  }catch(ex){
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


useFocusEffect(
  React.useCallback( () => {
    callEndpoint();
    filterDamageByDay(value)
    return () => {
     reset();
      console.debug('Screen was unfocused');
    };
  },[])
);

useFocusEffect(
  React.useCallback( () => {
    if(header.Type == "FILTERBYDAY"){
      callEndpoint();
      filterDamageByDay(value)
      }
  },[filterPageCat])
);
useFocusEffect(
  React.useCallback( () => {
    if(header.Type == "FILTERBYDATE"){
      callEndpoint();
      filterDamageByDate(dates);    
    }
  },[filterPageName])
);


const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = async(date) => {
  if(dates != moment(date).format('MM/DD/YYYY')){
  setDate(moment(date).format('MM/DD/YYYY') );
  await reset();
  await filterDamageByDate(moment(date).format('MM/DD/YYYY') )
  hideDatePicker();
  }
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
             onPress={async()=>{
              if(value != res.key){
               setValue(res.key);
               setModalVisible(!modalVisible);
               setText(res.text);
               await reset();
               await filterDamageByDay(res.key);
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