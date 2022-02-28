import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View  } from 'react-native';
import Footer from '../Components/organisim/damagePage/Footer'
import Content from "../Components/organisim/damagePage/Content"
import Filter from "../Components/organisim/damagePage/Filter"
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

const DamageScreen = ({navigation})=>{
  const [value, setValue] = React.useState(undefined)
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
    return(
        <View style={{flex:1,
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
              <Content data={DATA}/>
            <Footer/>
        </View>
    );
}

export default DamageScreen;