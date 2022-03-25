import React, { createContext, useReducer,useContext } from "react";

import detailReducer,{initialState,ACTIONS} from "./DetailReducer";
const DetailContext = createContext(initialState);
export const DetailProvider =(props)=>{

    const [state,dispatch] = useReducer(detailReducer,initialState);
   
   
    React.useEffect(()=>{
        updateStock()
    },[state.index1,state.index2])

    const increment=()=>{
        dispatch({type:ACTIONS.INCREMENT})
    }

    const decrement=()=>{
        dispatch({type:ACTIONS.DECREMENT})
    }

    const getVariety=(variety)=>{
        dispatch({
            type:ACTIONS.GETVARIETY,
            variety:variety
        })
    }

    const variationClick=(index,value)=>{
        dispatch({
            type:ACTIONS.VARIATIONCLICK,
            index:index,
            value:value,
        })
    }

    const subVariationClick=(index,value)=>{
        dispatch({
            type:ACTIONS.SUBVARIATIONCLICK,
            index:index,
            value:value,
        })
    }
    const getStoreFid = (storeFid)=>{
        dispatch({
            type:ACTIONS.GETSTOREFID,
            storeFid:storeFid
        })
    }
    const getIndex3 = (variety)=>{
        dispatch({
            type:ACTIONS.GETINDEX3,
            variety:variety
        })
    }
    const setIndex3 = (index3) =>{
        dispatch({
            type:ACTIONS.SETINDEX3,
            index3:index3
        })
    }

    const getInputPrice = (inputPrice) =>{
        dispatch({
            type:ACTIONS.GETINPUTPRICE,
            inputPrice:inputPrice
        })
    }
    const updateStock=()=>{
        dispatch({
            type:ACTIONS.UPDATESTOCK,
        })
    }
    
    const reset=()=>{
        dispatch({
            type:ACTIONS.RESET
        })
    }

    const values={
        reset,
        cartId:state.cartId,
        name:state.name,
        quantity:state.quantity,
        variation:state.variation,
        subvariation:state.subVariation,
        variationName:state.variationName,
        subVariationName:state.subVariationName,
        variationValue:state.variationValue,
        subVariationValue:state.subVariationValue,
        inputPrice:state.inputPrice,
        stock:state.stock,
        stockFid:state.stockFid,
        subtotal:state.subTotal,
        index3:state.index3,
        itemCode:state.itemCode,
        price:state.price,
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
