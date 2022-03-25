
export const authIntialState = {
    token:null,
    storeFid:'',
    isLogin:false
}

export const AUTHACTIONS = {
    GETTOKEN:'GETTOKEN',
    SUCCESS:'SUCCESS'
}

const authReducer = (state = intialState,action) =>{
    switch(action.type){
        case AUTHACTIONS.GETTOKEN:{
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