import * as React from 'react';
import { View} from 'react-native';
import Content from '../Components/organisim/cartPage/Content';
import Footer from '../Components/organisim/cartPage/Footer';
import useTheme from '../Service/ThemeContext';

const CartScreen=({navigation })=>{
  const {getTotal,product,total} = useTheme();

      React.useEffect(()=>{
        getTotal()
        },[product])

  const navCheckout = () =>{
    
    navigation.navigate('Checkout')
  }
    return(
        <View style={{flex:1}}>
          <Content/>
          <Footer 
           total={"Total:"+total} 
           value={"Proced"}
          event ={navCheckout}/>
        </View>
    )
}

export default CartScreen;