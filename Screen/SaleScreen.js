
import * as React from 'react';
import { StyleSheet, View,ActivityIndicator } from 'react-native';
import moment from 'moment';
import Footer from '../Components/organisim/salePage/Footer';
import Content from '../Components/organisim/salePage/Content';
import Filter from '../Components/organisim/salePage/Filter';
import FilterMessage from '../Components/organisim/popUp/FilterMessage'
import RadioButton from '../Components/organisim/popUp/RadioButton';
import Calendar from '../Components/organisim/popUp/Calendar';
import { GetSaleEndPoint } from '../Service/URLstring';
import useApi from '../Service/ApiContext';
import {FilterOption} from '../Data/FilterOption'
import { SaleProvider } from '../Service/SaleContext';
import { useIsFocused } from "@react-navigation/native";

const SaleScreen = ({navigation})=>{

  const isFocused = useIsFocused();
  
  const {token,getSale,error,reset,callEndpoint,getFilterPageName,getHeader,
    filterPageName,getFilterPageCat,filterPageCat,header} = useApi();
  const [value, setValue] = React.useState('Today')
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [date,setDate] = React.useState("");

const filterSaleByDay = async(day)=>{
  try {
    const response = await fetch(GetSaleEndPoint+"/"+"day?day="+day+"&PageNumber="+filterPageCat+"&Type=FILTERBYDAY&PageSize=2",{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+token,
        'Accept': '*/*',
      }
    })
    const json = await response.json();
    const head = await JSON.parse(response.headers.get("x-pagination"));
    getHeader(head);
    getSale(json);
   } catch (ex) {
    error(ex)
   } 
}

const filterSaleByDate = async(date)=>{
  try{
    const response =await fetch(GetSaleEndPoint+"/"+"date?DateTime="+date+"&PageNumber="+filterPageName+"&Type=FILTERBYDATE&PageSize=2",{
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
    getSale(json);
  }catch(ex){
    error(ex)
  }
}

const onEnd = () => {
  if(filterPageCat < header.TotalPages){
    if(header.Type == "FILTERBYDAY"){
      getFilterPageCat(filterPageCat+1);    
    }
  }

  if(filterPageName < header.TotalPages){
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
  return()=>{reset();}
},[isFocused])

React.useEffect(()=>{
  if(header.Type == "FILTERBYDAY"){
  callEndpoint();
  filterSaleByDay(value)
  }
},[filterPageCat])

React.useEffect(()=>{
  if(header.Type == "FILTERBYDATE"){
    console.debug("look")
    filterSaleByDate(date);    
  }
},[filterPageName])

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  reset();
  setDate(moment(date).format('MM/DD/YYYY') );
  filterSaleByDate(moment(date).format('MM/DD/YYYY') );
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
                 reset();
                 filterSaleByDay(res.key)
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
              <Content reach={onEnd}/>
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