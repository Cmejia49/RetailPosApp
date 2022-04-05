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
            type:ACTIONS.GET_PRODUCT,
            product:payload
        })
    }

    const getCategories =(category)=>{
        dispatch({
            type:ACTIONS.GET_CATEGORIES,
            categories:category
        })
    }

    
    const getDetail =(payload)=>{
        dispatch({
            type:ACTIONS.GET_DETAIL,
            detail:payload
        })
    }

    const getSale = (sale) =>{
        dispatch({
            type:ACTIONS.GET_SALE,
            sale:sale,
        })
    }
    
    const getDamage =(damage)=>{
        dispatch({
            type:ACTIONS.GET_DAMAGE,
            damage:damage
        })
    }

    const getExpenses =(expenses)=>{
        dispatch({
            type:ACTIONS.GET_EXPENSES,
            expenses:expenses
        })
    }

    const getHeader =(header)=>{
        dispatch({
            type:ACTIONS.GET_HEADER,
            header:header
        })
    }

    const getPage=(page,filterPage)=>{
        dispatch({
            type:ACTIONS.GET_PAGE,
            page:page,
            filterPage:filterPage
        })
    }

    const getFilterPageCat=(filterPage)=>{
        dispatch({
            type:ACTIONS.GET_FILTER_PAGE_CAT,
            filterPageCat:filterPage
        })
    }

    const getFilterPageName=(filterPage)=>{
        dispatch({
            type:ACTIONS.GET_FILTER_PAGE_NAME,
            filterPageName:filterPage
        })
    }

    const getCatName =(catName)=>{
        dispatch({
            type:ACTIONS.GET_CAT_NAME,
            catName:catName
        })
    }
    const search=(searchValue)=>{
        dispatch({
            type:ACTIONS.SEARCH,
            searchValue:searchValue
        })
    }

    const getToken = (token)=>{
        authDispatch({
            type:AUTHACTIONS.GET_TOKEN,
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
        getHeader,
        getPage,
        getFilterPageName,
        getFilterPageCat,
        getCatName,
        search,
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