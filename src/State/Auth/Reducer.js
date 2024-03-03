import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user:null,
    isLoding:false,
    error:null,
    jwt:null
}

export const authReducer = (state= initialState,action) =>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state,isLoding:true,error:null}
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state,isLoding:false,erroe:null, jwt:action.payload}
        case GET_USER_SUCCESS:
            return {...state,isLoding:false,error:null, user:action.payload}
        
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return{...state, isLoding:false, error:action.payload}            
        
        case LOGOUT: 
            return {...initialState}
        default: 
            return state;
    }

}