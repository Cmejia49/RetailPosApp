
import React,{useReducer, useState} from 'react'

export const initialState ={
    product:[],
    categories:[],
    detail:[],
    sale:[],
    damage:[],
    expenses:[],
    isLoading:false,
    error:null
};

export const ACTIONS={
    CALL_ENDPOINT:'call',
    GETPRODUCT:'GetProduct',
    GETCATEGORIES:'GetCategories',
    GETDETAIL:'GetDetail',
    GETSALE:'GETSALE',
    GETDAMAGE:'GETDAMAGE',
    GETEXPENSES:'GETEXPENSES',
    ERROR:'error',
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
        case ACTIONS.GETPRODUCT:{
            console.debug("GETPRODUCT",action.product);
            return{
                ...state,
                isLoading:false,
                product:action.product,
            };
        }
        case ACTIONS.GETCATEGORIES:{
            console.debug("GETCATEGORIES",action.categories);
            return{
                ...state,
                isLoading:false,
                categories:action.categories,
            };
        }

        case ACTIONS.GETDETAIL:{
            console.debug("GETDETAIL",action.detail);
            return{
                ...state,
                isLoading:false,
                detail:action.detail,
            };
        }

        case ACTIONS.GETSALE:{
            console.debug("GETSALE",action.sale);
            return{
                ...state,
                isLoading:false,
                sale:action.sale
            }
        }

        case ACTIONS.GETDAMAGE:{
            console.debug("GETDAMAGE",action.damage);
            return{
                ...state,
                isLoading:false,
                damage:action.damage
            }
        }

        case ACTIONS.GETEXPENSES:{
            console.debug("GETEXPENSES",action.expenses);
            return{
                ...state,
                isLoading:false,
                expenses:action.expenses
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