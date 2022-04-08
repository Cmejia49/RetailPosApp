
export const intialState={
    value:'',
    detail:'',
    totalValue:0
}

export const ACTION={
    GET_VALUE:"GET_VALUE",
    GET_DETAIL:"GET_DETAIL",
    GET_TOTAL:'GET_TOTAL',
    RESET:'RESET'
}

const expensesReducer =(state=intialState,action)=>{
    
    switch(action.type){
        case ACTION.GET_VALUE:{
            console.debug("GET_VALUE")
            return{
                ...state,
                value:action.value,
                   totalValue:state.totalValue+action.value 
            }
        }

        case ACTION.GET_DETAIL:{
            console.debug("GET_DETAIL")
            
            return{
                ...state,
                detail:action.detail
            }
        }

        case ACTION.RESET:{
            return{
                ...state,
                totalValue:0
            }
        }

        default:{
            throw new Error(`No case for type ${action.type} found in Expenses Reducer.`);
        }
    }
}

export default expensesReducer;