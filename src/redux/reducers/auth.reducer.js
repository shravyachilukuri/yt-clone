
import { LOAD_PROFILE, LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL, LOG_OUT } from "../actionTypes"
const initialstate = {
    accessToken :sessionStorage.getItem("yt-access-token") ? sessionStorage.getItem("yt-access-token"):null,
    user: sessionStorage.getItem("yt-user") ? JSON.parse(sessionStorage.getItem("yt-user")) : null,
    loading:false
}
export const authReducer = ( state= initialstate,action) =>{

    switch(action.type){
        case LOGIN_REQUEST:
            return {
              ...state,
              loading:true,
            }
    
    case LOGIN_SUCCESS:
        return {
          ...state,
          accessToken:action.payload,
          loading:false,
        }  
        case LOGIN_FAIL:
            return {
              ...state,
              accessToken:null,
              loading:false,
              error:action.payload,
            }  
        case LOAD_PROFILE:
                return {
                  ...state,
                  user:action.payload,
                }   
        case LOG_OUT:
             return {
                ...state,
                user:null,
                accessToken:null,
                }     
                  
        default :
          return state       
            
}
}