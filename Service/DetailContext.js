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

    const variationClick=(index,name)=>{
        dispatch({
            type:ACTIONS.VARIATION_CLICK,
            index:index,
            name:name,
        })
    }

    const subVariationClick=(index,name)=>{
        dispatch({
            type:ACTIONS.SUBVARIATION_CLICK,
            index:index,
            name:name,
        })
    }
    const getStoreFid = (storeFid)=>{
        dispatch({
            type:ACTIONS.GET_STOREFID,
            storeFid:storeFid
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
        getInputPrice,
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
