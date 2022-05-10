

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
    GET_VARIETY:'GETVARIETY',
    GET_STOREFID:'GETSTOREFID',
    GET_INDEX3:'GETINDEX3',
    SET_INDEX3:'SETINDEX3',
    VARIATION_CLICK:'VARIATIONCLICK',
    SUBVARIATION_CLICK:'SUBVARIATIONCLICK',
    UPDATE_STOCK:'UPDATESTOCK',
    UPDATE_QNT:'UPDATEQNT',
    GET_INPUTPRICE:'GETINPUTPRICE',
    RESET:'RESET'
}


const detailReducer=(state=initialState,action)=>{

    switch(action.type){
        case ACTIONS.INCREMENT:{
            console.debug("INCREMENT");
            if(state.quantity >= state.stock){
                return{
                    ...state,
                    quantity:state.stock
                }
            }
            return{
                ...state,
                quantity:state.quantity + 1
                
            }
      
        };

        case ACTIONS.DECREMENT:{
            console.debug("DECREMENT");
            if(state.quantity <=0){
                return{
                    ...state,
                    quantity:0
                }
            }
            return{
                ...state,
                quantity:state.quantity - 1
            }
        };

        case ACTIONS.UPDATE_QNT:{
            return{
                ...state,
                quantity:0
            }
        }

        case ACTIONS.GET_INDEX3:{
            const variety = action.variety
            var variation = undefined;
            var subVariation = undefined;
            if(variety.variationList.length == 1){
                 variation =  variety.variationList[0].variationValuesList[0];
                 console.debug(JSON.stringify(variation)+"walang hiya")
            }else if(variety.variationList.length == 2){
                 subVariation =  variety.variationList[0].variationValuesList[0].children[0];
                 console.debug(subVariation+"walang hiya2")
                }

            //if no variation
            if(variety.variationList === undefined || variety.variationList === null){
                const index3 =  srchIndex(variety.stockList,state.storeFid)
                return{
                    ...state,
                    index3:index3
                }
            }
            //1 variation
            if(variation !== undefined || variation !== null && subVariation === null){
                console.debug("sex"+variation.stockList)
                const index3 =  srchIndex(variation.stockList,state.storeFid)
               return{
                   ...state,
                   index3:index3
               }
            }
            //2 variation
            if(subVariation !== undefined || subVariation !== null){
               const index3 = srchIndex(subVariation.stockList,state.storeFid)
               return{
                   ...state,
                   index3:index3
               }
            }
            
        }
        case ACTIONS.SET_INDEX3:{
            console.debug("SETINDEX3");
            return{
                ...state,
                index3:action.index3
            }
        }
        case ACTIONS.GET_VARIETY:{
            console.debug("GETVARIETY");
            const variety = action.variety
            const name = variety.itemName
            const price = variety.priceRange
            const itemid = variety.itemId
            let variationName = undefined
            let subVariationName =  undefined
            let variation = [];
            let subvariation = [];
            let total=0
            //Validate the size of variety
            //No variety
            if(variety.variationList === undefined || variety.variationList === null){
               total = variety.stockList[state.index3].quantity;
                return{
                    ...state,
                    stock:total,
                    name:name,
                    price:price,
                    itemId:itemid
                };
            //1 variety
            }else if(variety.variationList.length== 1){
                variationName =  variety.variationList[0].variationName
                const length = variety.variationList[0].variationValuesList.length;
                for(let i = 0 ;i<length;i++){
                    const v1 = variety.variationList[0].variationValuesList[i];
                    console.debug(JSON.stringify(v1.stockList)+"asdasd"+state.index3)
                   total += v1.stockList[state.index3].quantity
                   variation.push(v1);
                }
                return{
                    ...state,
                    variationName:variationName,
                    variation:variation,
                    stock:total,
                    name:name,
                    price:price,
                    itemId:itemid
                }
            }else if(variety.variationList.length == 2){
                variationName = variety.variationList[0].variationName
                subVariationName = variety.variationList[1].variationName
               const length = variety.variationList[0].variationValuesList.length;
               for(let i = 0 ;i<length;i++){
                const v1 = variety.variationList[0].variationValuesList[i];
                   variation.push(v1)
                 const subLength =  variety.variationList[0].variationValuesList[i].children.length;
                 for(let j = 0;j<subLength;j++){
                    const v2 = variety.variationList[0].variationValuesList[i].children[j];
                           const index3 = ~~state.index3*1
                           total = total + v2.stockList[index3].quantity;
                       
                    subvariation.push(v2);
                  } 
                }     
                return{
                    ...state,
                    variationName:variationName,
                    subVariationName:subVariationName,
                    variation:variation,
                    // filter the same name or value 
                    subVariation:subvariation.filter((v,i,subvariation)=>subvariation.findIndex(t=>(t.variationValueName===v.variationValueName))===i),
                    stock:total,
                    name:name,
                    price:price,
                    itemId:itemid
                };
            }
   
     
        }
        case ACTIONS.GET_STOREFID:{
            console.debug("GETSTOREFID")
            return{
                ...state,
                storeFid:action.storeFid
            }
        }

        case ACTIONS.GET_INPUTPRICE:{
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
        case ACTIONS.VARIATION_CLICK:{
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

        
        case ACTIONS.SUBVARIATION_CLICK:{
            console.debug("SUBVARIATIONCLICK");
            console.debug(action.index);
            return{
                ...state,
                index2:action.index,
                subVariationValue:action.value
            }
        }
        //This code not execute when item don't have veriety
        case ACTIONS.UPDATE_STOCK:{
            let index1 = state.index1;
            let index2 = state.index2;
            let index3 = state.index3;
            console.debug(index1 + "index1")
            console.debug(state.variation.length + "  "+state.subVariation.length)
            //1 variety
            if(state.variation !== 0 && state.subVariation.length == 0){
             if(index1 != undefined){
                try{
                    console.debug(index1 + "index123")
                    let stock = state.variation[index1].stockList[index3].quantity
                    let itemCode = state.variation[index1].stockList[index3].itemCode
                    let price = state.variation[index1].stockList[index3].price
                    let stockFid = state.variation[index1].stockList[index3].stockId
                    return{
                        ...state,
                        stock:stock,
                        itemCode:itemCode,
                        price:price,
                        stockFid:stockFid,
                        cartId:state.itemId+state.variationValue+state+stockFid
                    }
                }catch(error){
                    console.debug(error)
                }  
             }
            }
            //2 veriety
            if(state.variation !== undefined && state.subVariation !== undefined ){
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

//Search for index3
const srchIndex=(stockList,storeFid)=>{
    const low = 0;
    const high =  stockList.length - 1;
    while(low<=high){
       const highId =  stockList[high].storeFid;
       const lowId = stockList[low].storeFid;
       if(storeFid=== highId){
           return high;
       }else if (storeFid=== lowId){
        return low;
       }else{
           console.debug("not find");
       }
       low+1;
       high-1
    }
}


export default detailReducer;