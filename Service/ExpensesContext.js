import React, { createContext, useReducer,useContext } from "react";

import expensesReducer,{intialState,ACTION} from "./expensesReducer";

const ExpensesContext = createContext(intialState);

export const ExpensesProvider =(props)=>{

    const [state,dispatch] = useReducer(expensesReducer,intialState);

    const getValue=(amt)=>{
        dispatch({
            type:ACTION.GET_VALUE,
            value:amt
        })
    }

    const getDetail=(detail)=>{
        dispatch({
            type:ACTION.GET_DETAIL,
            detail:detail
        })
    }


    const reset =()=>{
        dispatch({
            type:ACTION.RESET
        })
    }

    const value={
        ...state,
        getValue,
        getDetail,
        reset
    }

    return(
    <ExpensesContext.Provider value={value}>{props.children}</ExpensesContext.Provider>
    );
}

const useExpenses=()=>{
    const context = useContext(ExpensesContext)

    if(context === undefined){
        throw new Error("Expenses Context Undefined")
    }
    return context;
}

export default useExpenses;