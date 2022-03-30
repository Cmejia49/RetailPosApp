import React, { createContext, useReducer,useContext } from "react";

import damageReducer, {initialState, ACTIONS} from "./damageReducer";

const DamageContext = createContext(initialState);

export const DamageProvider = (props)=>{
    const[state,dispatch] = useReducer(damageReducer,initialState);

    const getQuantity=(quantity)=>{
        dispatch({
            type:ACTIONS.GET_QUANTITY,
            quantity:quantity
        })
    }

    const getCost=(cost)=>{
        dispatch({
            type:ACTIONS.GET_COST,
            cost:cost
        })
    }

    const reset=()=>{
        dispatch({
            type:ACTIONS.RESET
        })
    }

    const value={
        ...state,
        reset,
        getCost,
        getQuantity,
    }

    return(
        <DamageContext.Provider value={value}>{props.children}</DamageContext.Provider>
    )

}

const useDamage=()=>{
    const context = useContext(DamageContext)
    if(context === undefined){
        throw new Error("Damage Context Undefined")
    }
    return context;
}

export default useDamage;