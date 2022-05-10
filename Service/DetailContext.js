import React, { createContext, useReducer,useContext } from "react";

import detailReducer,{initialState,ACTIONS} from "./DetailReducer";
const DetailContext = createContext(initialState);
export const DetailProvider =(props)=>{

    const [state,dispatch] = useReducer(detailReducer,initialState);
   
   
    React.useEffect(()=>{
        console.debug("hehe")
        updateStock();
        updateQnt();
    },[state.index1,state.index2])

    const increment=()=>{
        dispatch({type:ACTIONS.INCREMENT})
    }

    const decrement=()=>{
        dispatch({type:ACTIONS.DECREMENT})
    }

    const getVariety=(variety)=>{
        dispatch({
            type:ACTIONS.GET_VARIETY,
            variety:variety
        })
    }

    const variationClick=(index,value)=>{
        dispatch({
            type:ACTIONS.VARIATION_CLICK,
            index:index,
            value:value,
        })
    }

    const subVariationClick=(index,value)=>{
        dispatch({
            type:ACTIONS.SUBVARIATION_CLICK,
            index:index,
            value:value,
        })
    }
    const getStoreFid = (storeFid)=>{
        dispatch({
            type:ACTIONS.GET_STOREFID,
            storeFid:storeFid
        })
    }
    const getIndex3 = (variety)=>{
        dispatch({
            type:ACTIONS.GET_INDEX3,
            variety:variety
        })
    }
    const setIndex3 = (index3) =>{
        dispatch({
            type:ACTIONS.SET_INDEX3,
            index3:index3
        })
    }

    const getInputPrice = (inputPrice) =>{
        dispatch({
            type:ACTIONS.GET_INPUTPRICE,
            inputPrice:inputPrice
        })
    }
    const updateStock=()=>{
        dispatch({
            type:ACTIONS.UPDATE_STOCK,
        })
    }

    const updateQnt=()=>{
        dispatch({
            type:ACTIONS.UPDATE_QNT
        })
    }
    
    const reset=()=>{
        dispatch({
            type:ACTIONS.RESET
        })
    }

    const values={
        ...state,
        reset,
        increment,
        decrement,
        getVariety,
        variationClick,
        subVariationClick,
        updateStock,
        getStoreFid,
        getIndex3,
        getInputPrice,
        setIndex3,
    }
    return(
        <DetailContext.Provider value={values}>{props.children}</DetailContext.Provider>
    )
}

const useDetailOper=()=>{
    const context = useContext(DetailContext)

    if(context === undefined){
        throw new Error("DetailContext Undefined")
    }
    return context;
}

export default useDetailOper;
