

import React,{useReducer, useState} from 'react'
import { interpolate } from 'react-native-reanimated';

export const initialState={
    itemId:undefined,
    cartId:undefined,
    name:'',
    variation:[],
    subVariation:[],
    variationName:'',
    subVariationName:'',
    variationValue:'',
    subVariationValue:'',
    inputPrice:'',
    subTotal:0,
    quantity:0,
    stock:0,
    itemCode:'',
    price:0,
    storeFid:undefined,
    index1:undefined,
    index2:undefined,
    index3:undefined,
    stockFid:undefined
}

export const ACTIONS={
    INCREMENT :'INCREMENT',
    DECREMENT:'DECREMENT',
    GETVARIETY:'GETVARIETY',
    GETSTOREFID:'GETSTOREFID',
    GETINDEX3:'GETINDEX3',
    SETINDEX3:'SETINDEX3',
    VARIATIONCLICK:'VARIATIONCLICK',
    SUBVARIATIONCLICK:'SUBVARIATIONCLICK',
    UPDATESTOCK:'UPDATESTOCK',
    GETINPUTPRICE:'GETINPUTPRICE',
    RESET:'RESET'
}

const detailReducer=(state=initialState,action)=>{

    switch(action.type){
        case ACTIONS.INCREMENT:{
            console.debug("INCREMENT");
            return{
                ...state,
                quantity:state.quantity + 1
                
            }
      
        };

        case ACTIONS.DECREMENT:{
            console.debug("DECREMENT");
            return{
                ...state,
                quantity:state.quantity - 1
            }
        };

        case ACTIONS.GETINDEX3:{
            const variety = action.variety
            const low = 0;
            const high =  variety.variationList[0].variationValuesList[0].children[0].stockList.length - 1;
            while(low<=high){
               const highId =  variety.variationList[0].variationValuesList[0].children[0].stockList[high].storeFid;
               const lowId = variety.variationList[0].variationValuesList[0].children[0].stockList[low].storeFid;
               if(state.storeFid=== highId){
                   console.debug("high");
                   return{
                    ...state,
                       index3:high
                   }
               }else if (state.storeFid === lowId){
                console.debug("low");  
                return{
                    ...state,
                    index3:low
                }
               }else{
                   console.debug("not find");
               }
               low+1;
               high-1
            }
            console.debug("GETINDEX3");
            
        }
        case ACTIONS.SETINDEX3:{
            console.debug("SETINDEX3");
            return{
                ...state,
                index3:action.index3
            }
        }
        case ACTIONS.GETVARIETY:{
            console.debug("GETVARIETY");
            const variety = action.variety
            const name = variety.itemName
            const price = variety.priceRange
            const itemid = variety.itemId
            const variationName =  variety.variationList[0].variationName
            const subVariationName =  variety.variationList[1].variationName
            const variation = [];
            const subvariation = [];
            let total=0;
            const length = variety.variationList[0].variationValuesList.length;
            for(let i = 0 ;i<length;i++){
             const variaty = variety.variationList[0].variationValuesList[i];
                variation.push(variaty)
              const subLength =  variety.variationList[0].variationValuesList[i].children.length;
              for(let j = 0;j<subLength;j++){
                 const sub = variety.variationList[0].variationValuesList[i].children[j];
                        const index3 = ~~state.index3*1
                        total = total + sub.stockList[index3].quantity;
                    
                 subvariation.push(sub);
               }
               
             } 
            return{
                ...state,
                variationName:variationName,
                subVariationName:subVariationName,
                variation:variation,
                subVariation:subvariation.filter((v,i,subvariation)=>subvariation.findIndex(t=>(t.variationValueName===v.variationValueName))===i),
                stock:total,
                name:name,
                price:price,
                itemId:itemid
            };
        }
        case ACTIONS.GETSTOREFID:{
            console.debug("GETSTOREFID")
            return{
                ...state,
                storeFid:action.storeFid
            }
        }

        case ACTIONS.GETINPUTPRICE:{
            console.debug("GETIPUTPRICE")
            const price = action.inputPrice
            const subtotal = price * state.quantity
            console.debug(subtotal)
            return{
                ...state,
                inputPrice:price,
                subTotal:subtotal
            }
        }
        case ACTIONS.VARIATIONCLICK:{
            console.debug("VARIATIONCLICK");
            const index = action.index
            const subvariation = []
            state.variation[index].children.map(i=>subvariation.push(i))
            console.debug(index)
            return{
                ...state,
                index1:action.index,
                subVariation:subvariation,
                variationValue:action.value
            }
        }

        
        case ACTIONS.SUBVARIATIONCLICK:{
            console.debug("SUBVARIATIONCLICK");
            console.debug(action.index);
            return{
                ...state,
                index2:action.index,
                subVariationValue:action.value
            }
        }

        case ACTIONS.UPDATESTOCK:{
         
            let index1 = state.index1;
            let index2 = state.index2;
            let index3 = state.index3;
            if(index1 != undefined && index2 != undefined){
                try{
                    let stock = state.variation[index1].children[index2].stockList[index3].quantity
                    let itemCode = state.variation[index1].children[index2].stockList[index3].itemCode
                    let price = state.variation[index1].children[index2].stockList[index3].price
                    let stockFid = state.variation[index1].children[index2].stockList[index3].stockId
                    return{
                        ...state,
                        stock:stock,
                        itemCode:itemCode,
                        price:price,
                        stockFid:stockFid,
                        cartId:state.itemId+state.variationValue+state.subVariationValue+stockFid
                    }
                }catch(error){
                    console.debug(error)
                }             
            }
            return{
                ...state
            }
        }
        case ACTIONS.RESET:{
            console.debug("RESET")
            return{
                ...state,
                variation:[],
                subVariation:[],
                subTotal:0,
                quantity:0,
                stock:0,
                variationValue:'',
                subVariationValue:'',
                inputPrice:'',
                index1:undefined,
                index2:undefined
            }
        }

        default:
            throw new Error(`No case for type ${action.type} found in DetailReducer.`);
    }




}

export default detailReducer;