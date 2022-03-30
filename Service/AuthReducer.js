
export const authIntialState = {
    token:null,
    storeFid:'',
    isLogin:false
}

export const AUTHACTIONS = {
    GET_TOKEN:'GETTOKEN',
    SUCCESS:'SUCCESS'
}

const authReducer = (state = intialState,action) =>{
    switch(action.type){
        case AUTHACTIONS.GET_TOKEN:{
            console.debug("GETTOKEN");
            return{
                ...state,
                token:action.token,
            }
        }

        default:
            throw new Error(`No case for type ${action.type} found in authReducer.`);
            
    }
}

export default authReducer;