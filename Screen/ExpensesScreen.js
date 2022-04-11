import * as React from 'react';
import { View,StyleSheet  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Content from '../Components/organisim/expensesPage/Content';
import Footer from '../Components/organisim/expensesPage/Footer';
import Filter from '../Components/organisim/expensesPage/Filter';
import FilterMessage from '../Components/organisim/popUp/FilterMessage'
import RadioButton from '../Components/organisim/popUp/RadioButton';
import Calendar from '../Components/organisim/popUp/Calendar';
import moment from 'moment';
import useApi from '../Service/ApiContext';
import {FilterOption} from '../Data/FilterOption'
import { GetExpensesEndpoint } from '../Service/URLstring';
import { useFocusEffect } from '@react-navigation/native';

const ExpensesScreen = ({navigation})=>{

  const {token,getExpenses,error,reset,callEndpoint,getFilterPageName,getHeader,
    filterPageName,getFilterPageCat,filterPageCat,header} = useApi();

  const [value, setValue] = React.useState('Today')
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dates,setDate] = React.useState("");


  const filterExpensesByDay = async(day)=>{
    let filterPageDay = filterPageCat;
    try {
      if(filterPageDay > header.TotalPages){
        filterPageDay = 1 ;
      }
      const response = await fetch(GetExpensesEndpoint+"/"+"day?day="+day+"&PageNumber="+filterPageDay+"&Type=FILTERBYDAY&PageSize=10",{
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
      getExpenses(json);
     } catch (ex) {
      error(ex)
     } 
  }
  
  const filterExpensesByDate = async(date)=>{
    let filterPageDate = filterPageName;
    try {
      if(filterPageDate > header.TotalPages){
        filterPageDate = 1 ;
      }
      const response =await fetch(GetExpensesEndpoint+"/"+"date?DateTime="+date+"&PageNumber="+filterPageDate+"&Type=FILTERBYDATE&PageSize=10",{
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
      getExpenses(json);
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
  React.useCallback(()=>{
    handleConfirm();
    return () => {
      reset();
    };

},[])
);

useFocusEffect(
  React.useCallback(()=>{
  if(header.Type == "FILTERBYDAY"){
  callEndpoint();
  filterExpensesByDay(value)
  }
},[filterPageCat])
);

useFocusEffect(
  React.useCallback(()=>{
  if(header.Type == "FILTERBYDATE"){
    callEndpoint();
    filterExpensesByDate(dates);    
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
    callEndpoint();
    setDate(moment(date).format('MM/DD/YYYY'));
    filterExpensesByDate(moment(date).format('MM/DD/YYYY'));
    hideDatePicker();
    }
    setValue("Today")
    setText("Today")
    hideDatePicker();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <View style={{flexDirection:'row',marginRight:20}}>
             <MaterialIcons.Button  name="add"
           size={20}
           backgroundColor="#fff"
            borderWidth={1}
           color="#000"
           paddingVertical={0}
           paddingHorizontal={-2}
           iconStyle={
           {
               borderWidth:1,
            marginRight:-1
           }
           } 
           onPress={()=>navigation.navigate('AddExpenses')}
           />
       
          </View>             

      ),
    });
  }, [navigation]);

    return(
      <View style={styles.container}>
                  <Calendar
              visible={isDatePickerVisible}
              onConfrim={handleConfirm}
              onCancel={hideDatePicker}
            />
<FilterMessage visible={modalVisible}>
        {FilterOption.map(res => {
                           return(
              <RadioButton
              key={res.key}
              id={res.key}
              text={res.text}
              value={value}
             onPress={()=>{
              if(value != res.key){
                getFilterPageCat(1)
               reset();
              filterExpensesByDay(res.key);
               setValue(res.key);
               setModalVisible(!modalVisible);
               setText(res.text);
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
    );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#FFF4F4",
      paddingTop:5,
  },
  
 

})
export default ExpensesScreen;