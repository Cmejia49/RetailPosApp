
export const initialState={
    
    totalCost:0,
    cost:'',
    subtotal:0,
    total:0,
    quantity:0,
    totalQnt:0,
}

export const ACTIONS={
    GET_SUBTOTAL:'GET_SUBTOTAL',
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
 const damageReducer=(state=initialState,action)=>{
 
     switch(action.type){
         case ACTIONS.GET_SUBTOTAL:{
             let margin = (state.subtotal - (state.quantity * state.cost))
             return{
                 ...state,
                 margin:margin,
                 totalMargin:state.totalMargin+margin
             }
         }
         case ACTIONS.GET_QUANTITY:{
             return{
                 ...state,
                 quantity:action.quantity,
                 totalQnt:state.totalQnt + state.quantity
             }
         }
         case ACTIONS.GET_COST:{
                 const s = converter(action.cost);
                  console.debug(s)
             
             return{
                 ...state,
                 cost:s,
                totalCost:state.totalCost + (s*state.quantity)
                
             }
         }
 
         case ACTIONS.RESET:{
             return{
                 ...state,
                 totalCost:0,
                 totalMargin:0,
                 totalQnt:0
             }
         }
    default:{
     throw new Error(`No case for type ${action.type} found in SaleReducer.`);
    }
          
     }
 }
 
 export default damageReducer;