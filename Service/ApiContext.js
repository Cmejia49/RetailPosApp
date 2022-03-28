import React, { createContext, useReducer,useContext } from "react";

import apiReducer,{initialState,ACTIONS} from "./ApiReducer";
import authReducer,{authIntialState,AUTHACTIONS} from "./AuthReducer";
import { DetailProvider } from "./DetailContext";
const ApiContext = createContext(initialState);

export const ApiProvider = (props) =>{
    
    const [state,dispatch] = useReducer(apiReducer,initialState);
    const [authState, authDispatch] = useReducer(authReducer,authIntialState)
    
    const callEndpoint =()=>{
        dispatch({type:ACTIONS.CALL_ENDPOINT})
    }

    const getProduct =(payload)=>{
        dispatch({
            type:ACTIONS.GETPRODUCT,
            product:payload
        })
    }

    const getCategories =(category)=>{
        dispatch({
            type:ACTIONS.GETCATEGORIES,
            categories:category
        })
    }

    
    const getDetail =(payload)=>{
        dispatch({
            type:ACTIONS.GETDETAIL,
            detail:payload
        })
    }

    const getSale = (sale) =>{
        dispatch({
            type:ACTIONS.GETSALE,
            sale:sale,
        })
    }
    
    const getDamage =(damage)=>{
        dispatch({
            type:ACTIONS.GETDAMAGE,
            damage:damage
        })
    }

    const getExpenses =(expenses)=>{
        dispatch({
            type:ACTIONS.GETEXPENSES,
            expenses:expenses
        })
    }

    const getToken = (token)=>{
        authDispatch({
            type:AUTHACTIONS.GETTOKEN,
            token:token
        })
    }


    const error = (ex)=>{
        dispatch({type:ACTIONS.ERROR,error:ex})
    }

    const reset=()=>{
        dispatch({type:ACTIONS.RESET})
    }

    const value={
        ...state,
        ...authState,
        callEndpoint,
        getProduct,
        getCategories,
        error,
        getDetail,
        getToken,
        getSale,
        getDamage,
        getExpenses,
        reset
    }
    return(
        <ApiContext.Provider value={value}>
            <DetailProvider>
                     {props.children}
            </DetailProvider>
        </ApiContext.Provider>
    );
}

const useApi=()=>{
    const context = useContext(ApiContext);
    if(context ===undefined){
        throw new Error("error");
    }
    return context;
}
export default useApi;