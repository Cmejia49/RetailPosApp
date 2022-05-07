
import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import moment from 'moment';
import Footer from '../Components/organisim/salePage/Footer';
import Content from '../Components/organisim/salePage/Content';
import Filter from '../Components/organisim/salePage/Filter';
import FilterMessage from '../Components/organisim/popUp/FilterMessage'
import RadioButton from '../Components/organisim/popUp/RadioButton';
import Calendar from '../Components/organisim/popUp/Calendar';
import { useFocusEffect } from '@react-navigation/native';
import useApi from '../Service/ApiContext';
import {FilterOption} from '../Data/FilterOption'
import { SaleProvider } from '../Service/SaleContext';
import { fetchSaleByDay, fetchSaleByDate } from "../Service/FetchService";
const SaleScreen = ()=>{

  
  const {token,getSale,error,reset,callEndpoint,getFilterPageName,getHeader,
    filterPageName,getFilterPageCat,filterPageCat,header} = useApi();
  const [value, setValue] = React.useState('Today')
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dates,setDate] = React.useState("");
  
const filterSaleByDay = async(day)=>{
  let filterPageDay = filterPageCat;
  try {
    if(filterPageDay > header.TotalPages){
      filterPageDay = 1 ;
    }
    await fetchSaleByDay(day,filterPageDay,token).then(res =>{
      getHeader(res[0]);
      getSale(res[1]);
   }).catch(err=>{
     error(err)
   })
   } catch (ex) {
    error(ex)
   } 
}

const filterSaleByDate = async(date)=>{
  let filterPageDate = filterPageName;
  try {
    if(filterPageDate > header.TotalPages){
      filterPageDate = 1 ;
    }
    await fetchSaleByDate(date,filterPageDate,token).then(res =>{
      getHeader(res[0]);
      getSale(res[1]);
   }).catch(err=>{
     error(err)
   })
  }catch(ex){
    error(ex)
  }
}

const onEnd = () => {

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
    handleConfirm();
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
      filterSaleByDay(value)
      }
  },[filterPageCat])
);
useFocusEffect(
  React.useCallback( () => {
    if(header.Type == "FILTERBYDATE"){
      callEndpoint();
      filterSaleByDate();    
    }
  },[filterPageName])
);



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
  filterSaleByDate(moment(date).format('MM/DD/YYYY') );
  hideDatePicker();
}
setValue("Today")
setText("Today")
hideDatePicker();
};
    return(
      <SaleProvider>
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
              id={res.key}
              key={res.key}
              text={res.text}
              value={value}
             onPress={()=>{
               if(value != res.key){
                 getFilterPageCat(1)
                reset();
                filterSaleByDay(res.key)
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
              <Content reach={()=>onEnd()}/>
              <Footer/>
        </View>
        </SaleProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF4F4",
        paddingTop:5,
    },
    
   

})

export default SaleScreen;