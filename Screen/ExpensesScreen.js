import * as React from 'react';
import { View  } from 'react-native';
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
const ExpensesScreen = ({navigation})=>{
  const {token,getExpenses,error,callEndpoint} = useApi();

  const [value, setValue] = React.useState('Today')
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [date,setDate] = React.useState("");


  const filterExpensesByDay = async(day)=>{
    try {
      callEndpoint();
      const response = await fetch(GetExpensesEndpoint+"/"+"day?day="+day,{
        method:"GET",
        headers:{
          'Authorization': 'Bearer '+token,
          'Accept': '*/*',
        }
      })
      const json = await response.json();
      getExpenses(json);
     } catch (ex) {
      error(ex)
     } 
  }
  
  const filterExpensesByDate = async(date)=>{
    try{
      callEndpoint();
      const response =await fetch(GetExpensesEndpoint+"/"+"date?date="+date,{
        method:"GET",
        headers:{
          'Authorization': 'Bearer '+token,
          'Accept': '*/*',
        }
      })
      const json = await response.json();
      getExpenses(json);
    }catch(ex){
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
    setDate(moment(date).format('MM/DD/YYYY'));
    filterExpensesByDate(moment(date).format('MM/DD/YYYY'));
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
        <View style={{  flex:1,
          backgroundColor: "#FFF4F4",
          paddingTop:5,}}>
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
              filterExpensesByDay(res.key);
               setValue(res.key);
               setModalVisible(!modalVisible);
               setText(res.text);
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
export default ExpensesScreen;