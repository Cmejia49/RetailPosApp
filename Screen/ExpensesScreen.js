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
const PROP = [
	{
		key: 'Today',
		text: 'Today',
	},
	{
		key: 'Yesterday',
		text: 'Yesterday',
	},
	{
		key: 'ThisWeek',
		text: 'This Week',
	},
	{
		key: 'LastWeek',
		text: 'Last Week',
  },
  {
    
		key: 'ThisMonth',
		text: 'This Month',
  },
  {
    
		key: 'LastMonth',
		text: 'Last Month',
  },
  {
    
		key: 'ThisYear',
		text: 'This Year',
  },
  {
    
		key: 'LastYear',
		text: 'Last Year',
  },
  {
    
		key: 'All',
		text: 'All',
  },
];
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

const ExpensesScreen = ({navigation})=>{
  const [value, setValue] = React.useState(PROP[0].key)
  const [text, setText] = React.useState('Today')
  const [modalVisible, setModalVisible]= React.useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
const [date,setDate] = React.useState("");
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {

  setDate(moment(date).format('MM/DD/YYYY') );
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
        {PROP.map(res => {
                           return(
              <RadioButton
              keys={res.key}
              id={res.key}
              text={res.text}
              value={value}
             onPress={()=>{
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
            <Content data={DATA}/>
            <Footer/>
        </View>
    );
}
export default ExpensesScreen;