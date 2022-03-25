import React, { createContext, useReducer,useContext } from "react";

import themeReducer, { initialState,ACTIONS } from "./themeReducer";

const ThemeContext=createContext(initialState);
export const ThemeProvider = (props) =>{
 
    const [state,dispatch] = useReducer(themeReducer,initialState);

    const increment = (id)=>{
        dispatch({type:ACTIONS.INCREMENT, payload:id,
        })
    }
    const decrement = (id)=>{
        dispatch({type:ACTIONS.DECREMENT,payload:id})
    }
    //CART OPERATION
    const addCart = (product) =>{
        dispatch({
            type:ACTIONS.ADDCART,
            product:product
        })
    }

    const deleteCart =(id)=>{
        dispatch({
            type:ACTIONS.DELETECART,
            cartId:id
        })
    }
    
    const getTotal = ()=>{
        dispatch({
            type:ACTIONS.GETTOTAL
        })
    }
    
    const getChange =(amtReceived)=>{
        dispatch({
            type:ACTIONS.GETCHANGE,
            amtReceived:amtReceived
        })
    }

    const getTotalItem =()=>{
        dispatch({
            type:ACTIONS.GETTOTALITEM,
        })
    }

    const getDate =(date)=>{
        dispatch({
            type:ACTIONS.GETDATE,
            date:date
        })
    }

    const successReset=()=>{
        dispatch({
            type:ACTIONS.SUCCESS_RESET
        })
    }
    const value={
        ...state,
        increment,
        decrement,
        addCart,
        getTotal,
        getChange,
        getTotalItem,
        getDate,
        successReset,
        deleteCart
    }
    return (
    <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
    )
}

const useTheme = () =>{
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error("ThemeContext undefined")
    }
    return context;
}

export default useTheme;