
export const initialState = {
    product:[],
    sendProdct:[],
    total:0,
    change:0,
    amtReceive:'',
    totalItem:0,
    date:'',
    isSuccess:false
};
export const ACTIONS = {
    INCREMENT :'INCREMENT',
    DECREMENT:'DECREMENT',
    ADD_CART:'ADDCART',
    DELETE_CART:'DELETECART',
    GET_TOTAL:'GETTOTAL',
    GET_CHANGE:'GETCHANGE',
    GET_TOTAL_ITEM:'GETTOTALITEM',
    GET_DATE:'GETDATE',
    RESET:'RESET',
    SUCCESS_RESET:'SUCCESS_RESET'
}

const themeReducer=(state=initialState,action)=>{

        switch(action.type){
            case ACTIONS.INCREMENT:{
                const updatedCart = state.product.map((curElem) => {
                    if (curElem.cartId === action.payload) {
                        if(curElem.Quantity !== curElem.stock){
                      const quantity=curElem.Quantity + 1;
                      const subtotal = quantity * curElem.Price
                      return {
                         ...curElem, 
                         Quantity: curElem.Quantity + 1,
                         subtotal:subtotal
                        };
                    }
                  } 
                    return curElem;
                  });
              
                  return { ...state, product: updatedCart };
            }
            case ACTIONS.DECREMENT:{
               const updatedCart = state.product
                .map((curElem) => {
                  if (curElem.cartId === action.payload) {
                    if(curElem.Quantity !== 1){
                    const quantity=curElem.Quantity - 1;
                    const subtotal = quantity * curElem.Price
                    return {
                       ...curElem, 
                       Quantity: curElem.Quantity - 1, 
                       subtotal:subtotal
                      };
                  }
                }
                  return curElem;
                })
              return { ...state, product: updatedCart };
            };
            //CART OPERATION
            case ACTIONS.ADD_CART:{
              console.debug("ADD_CART")
              const cartProduct = state.product.concat(action.product)
              console.debug(cartProduct);
              return{
                ...state,
                product:cartProduct,
                
              } 
            }

            case ACTIONS.DELETE_CART:{
              console.debug("DELETE_CART",action.cartId)  
             
              const updatedCart = state.product.filter(
                (curElem) => curElem.cartId !== action.cartId)
               return{
                  ...state,
                  product:updatedCart
                }
            }

            case ACTIONS.GET_TOTAL:{
              let total = 0;
              console.debug("GET-TOTAL");
              if(state.product != undefined || state.product != null){
                state.product.map((curElem)=>{
                  total += curElem.subtotal;  
               })
               console.debug(total);
              }         
              return{
                ...state,
                total:total,
              }
            }

            case ACTIONS.GET_CHANGE:{
               console.debug("GET_CHANGE") 
               const change =  (1*action.amtReceived)-state.total 
               return{
                ...state,
                amtReceive:action.amtReceived,
                change:change,
              }
            }

            case ACTIONS.GET_TOTAL_ITEM:{
              return{
                ...state,
                totalItem:state.product.length
              }
            }
            case ACTIONS.GET_DATE:{
              return{
                ...state,
                date:action.date
              }
            }

            case ACTIONS.RESET:{
              return{
                ...state,
                amtReceive:''
              }
            }

            case ACTIONS.SUCCESS_RESET:{
              return{
                ...state,
                product:[]
              }
            }
            
            default:
              throw new Error(`No case for type ${action.type} found in ThemeReducer.`);
        }
            
}

export default themeReducer;