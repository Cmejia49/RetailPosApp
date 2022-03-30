
import React,{useReducer, useState} from 'react'

export const initialState ={
    product:[],
    categories:[],
    detail:[],
    sale:[],
    damage:[],
    expenses:[],
    isLoading:false,
    error:null,
    searchValue:''
};

export const ACTIONS={
    CALL_ENDPOINT:'call',
    GET_PRODUCT:'GetProduct',
    GET_CATEGORIES:'GetCategories',
    GET_DETAIL:'GetDetail',
    GET_SALE:'GETSALE',
    GET_DAMAGE:'GETDAMAGE',
    GET_EXPENSES:'GETEXPENSES',
    ERROR:'error',
    SEARCH:'SEARCH',
    RESET:'RESET'
};

const apiReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTIONS.CALL_ENDPOINT:{
            console.debug("CALLENDPOINT");
            return{
                ...state,
                 isLoading:true,
            };
        }
        case ACTIONS.GET_PRODUCT:{
            console.debug("GETPRODUCT",action.product);
            return{
                ...state,
                isLoading:false,
                product:action.product,
            };
        }
        case ACTIONS.GET_CATEGORIES:{
            console.debug("GETCATEGORIES",action.categories);
            return{
                ...state,
                isLoading:false,
                categories:action.categories,
            };
        }

        case ACTIONS.GET_DETAIL:{
            console.debug("GETDETAIL",action.detail);
            return{
                ...state,
                isLoading:false,
                detail:action.detail,
            };
        }

        case ACTIONS.GET_SALE:{
            console.debug("GETSALE",action.sale);
            return{
                ...state,
                isLoading:false,
                sale:action.sale
            }
        }

        case ACTIONS.GET_DAMAGE:{
            console.debug("GETDAMAGE",action.damage);
            return{
                ...state,
                isLoading:false,
                damage:action.damage
            }
        }

        case ACTIONS.GET_EXPENSES:{
            console.debug("GETEXPENSES",action.expenses);
            return{
                ...state,
                isLoading:false,
                expenses:action.expenses
            }
        }

        case ACTIONS.SEARCH:{
            console.debug("SEARCH");
            return{
                ...state,
                searchValue:action.searchValue
            }
        }
        case ACTIONS.ERROR:{
            console.debug("ERROR",action.error);
            return{
                ...state,
                isLoading:false,
                error:action.error,
            };
        }

        case ACTIONS.RESET:{
            return{
                ...state,
                product:[],
                categories:[],
            }
        }
        default:
            throw new Error(`No case for type ${action.type} found in ApiReducer.`);
    }

}
export default apiReducer;