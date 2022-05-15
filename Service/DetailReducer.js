

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
    stockFid:undefined
}

export const ACTIONS={
    INCREMENT :'INCREMENT',
    DECREMENT:'DECREMENT',
    GET_VARIETY:'GETVARIETY',
    GET_STOREFID:'GETSTOREFID',
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
            if(variety.variationList.length == 0){
               total = variety.stockList[0].quantity;
               console.debug(total)
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
                   total += v1.stockList[0].quantity
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
                           total = total + v2.stockList[0].quantity;
                       
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
            console.debug("VARIATIONCLICK",action.name);
            
            const index = action.index;
            if(action.index >= 0){  
                const subvariation = []
                state.variation[action.index].children.map(i=>subvariation.push(i))
                console.debug(index)
                
                return{
                    ...state,
                    index1:action.index,
                    subVariation:subvariation,
                    variationValue:action.name
                }
            }else{
                return{
                    ...state,
                    variationValue:action.name
                }
            }
        }

        
        case ACTIONS.SUBVARIATION_CLICK:{
            console.debug("SUBVARIATIONCLICK");
            console.debug(action.index);
            if(action.index >= 0){ 
                return{
                    ...state,
                    index2:action.index,
                    subVariationValue:action.value
            }
            }else{
                return{
                    ...state,
                    variationValue:action.name
                }
            }
        }
        //This code not execute when item don't have veriety
        case ACTIONS.UPDATE_STOCK:{
            let index1 = state.index1;
            let index2 = state.index2;
            console.debug(index1 + "index1")
            console.debug(state.variation.length + "  "+state.subVariation.length)
            //1 variety
            if(state.variation !== 0 && state.subVariation.length == 0){
             if(index1 != undefined){
                try{
                    let stock = state.variation[index1].stockList[0].quantity
                    let itemCode = state.variation[index1].stockList[0].itemCode
                    let price = state.variation[index1].stockList[0].price
                    let stockFid = state.variation[index1].stockList[0].stockId
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
                        let stock = state.variation[index1].children[index2].stockList[0].quantity
                        let itemCode = state.variation[index1].children[index2].stockList[0].itemCode
                        let price = state.variation[index1].children[index2].stockList[0].price
                        let stockFid = state.variation[index1].children[index2].stockList[0].stockId
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
                variationName:'',
                subVariationName:'',
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