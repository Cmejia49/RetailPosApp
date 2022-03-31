
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
    searchValue:'',
    header:[],
    page:1,
    filterPage:1,
    dict: {}
};

export const ACTIONS={
    CALL_ENDPOINT:'call',
    GET_PRODUCT:'GetProduct',
    GET_CATEGORIES:'GetCategories',
    GET_DETAIL:'GetDetail',
    GET_SALE:'GETSALE',
    GET_DAMAGE:'GETDAMAGE',
    GET_EXPENSES:'GETEXPENSES',
    GET_HEADER:'GET_HEADER',
    GET_PAGE:'GET_PAGE',
    GET_FILTER_PAGE:'GET_PAGE',
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
            const newDict = Object.assign({}, state.dict);

            const prop = action.product;

            const filtered = prop.reduce((accum, obj) => {
                if(!newDict[obj.itemId]){
                  newDict[obj.itemId] = true
                  accum.push(obj)
                }
                return accum
              }, [])
              const newObjects = [...state.product, ...filtered]

            return{
                ...state,
                isLoading:false,
                dict:newDict,
                product:newObjects
            };
        }
        case ACTIONS.GET_CATEGORIES:{
       
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

        case ACTIONS.GET_HEADER:{
            return{
                ...state,
                header:action.header
            }
        }

        case ACTIONS.GET_PAGE:{
            return{
                ...state,
                page:action.page,
            }
        }

        case ACTIONS.GET_FILTER_PAGE:{
            return{
                ...state,
                filterPage:action.filterPage
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
            console.debug("reset");
            return{
                ...state,
                product:[],
                dict:{},
                page:1,
                filterPage:1
            }
        }
        default:
            throw new Error(`No case for type ${action.type} found in ApiReducer.`);
    }

}
export default apiReducer;