import React, { createContext, useReducer,useContext } from "react";


import saleReducer,{initialState,ACTIONS} from "./saleReducer";

const SaleContext = createContext(initialState);

export const SaleProvider = (props)=>{

    const[state,dispatch] = useReducer(saleReducer,initialState);

    const getTotal=(price)=>{
        dispatch({
            type:ACTIONS.GET_TOTAL,
            price:price
        })
    }

    const getMargin=()=>{
        dispatch({
            type:ACTIONS.GET_MARGIN
        })
    }

    const getQuantity=(quantity)=>{
        dispatch({
            type:ACTIONS.GET_QUANTITY,
            quantity:quantity
        })
    }

    const getCost=(str)=>{
        dispatch({
            type:ACTIONS.GET_COST,
            str:str
        })
    }

    const reset=()=>{
        dispatch({
            type:ACTIONS.RESET
        })
    }

    const value={
        ...state,
        getTotal,
        getCost,
        getMargin,
        getQuantity,
        reset
    }

    return(
        <SaleContext.Provider value={value}>{props.children}</SaleContext.Provider>
    )
}

const useSale=()=>{
    const context = useContext(SaleContext)

    if(context === undefined){
        throw new Error("Sale Context Undefined")
    }
    return context;
}

export default useSale;