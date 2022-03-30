
export const initialState={
    
    converted:0,
    totalCost:0,
    cost:'',
    subtotal:0,
    total:0,
    margin:0,
    totalMargin:0,
    quantity:0,
    totalQnt:0,
    price:0,
    totalPrice:0
}


export const ACTIONS={
   GET_TOTAL:'GET_TOTAL',
   GET_MARGIN:'GET_MARGIN',
   GET_COST:'GET_COST',
   GET_QUANTITY:'GET_QUANTITY',
   RESET:'RESET'
}
const converter =(str)=>{
    if(str == null){
        return 0;
    }
    let s = '';
    const shopCode = "SDANTEMOJI"
    for(let i = 0;i<str.length;i++)
    {
        for(let j =0;j<shopCode.length;j++)
        {
            if(str.charAt(i) == shopCode.charAt(j))
            {
             
                  s+=''+shopCode.indexOf(shopCode.charAt(j))
            }
        }
    }
    return s;
}
const saleReducer=(state=initialState,action)=>{

    switch(action.type){
        case ACTIONS.GET_TOTAL:{       
            return{
                ...state,
                subtotal:state.quantity*action.price,
                price:action.price,
                totalPrice:state.totalPrice + action.price,
                total:state.total+state.subtotal
            }
        };
        case ACTIONS.GET_MARGIN:{
            let margin = (state.quantity*state.price - (state.quantity * state.cost))
            return{
                ...state,
                margin:margin,
                totalMargin:state.totalMargin + margin
            }
        }
        case ACTIONS.GET_QUANTITY:{
            return{
                ...state,
                quantity:action.quantity,
                totalQnt:state.totalQnt + action.quantity
            }
        }
        case ACTIONS.GET_COST:{
            let s = '';
            if(action.str == null){
                return{
                    ...state
                }
            }else{
        
                 s = converter(action.str);
            }
            return{
                ...state,
                cost:converter(action.str),
               totalCost:(1*state.totalCost)+(1*state.cost),
               
            }
        }

        case ACTIONS.RESET:{
            console.debug("reset")
            return{
                ...state,
                total:0,
                totalCost:0,
                totalMargin:0,
                totalPrice:0,
                totalQnt:0
            }
        }
   default:{
    throw new Error(`No case for type ${action.type} found in SaleReducer.`);
   }
         
    }
}

export default saleReducer;