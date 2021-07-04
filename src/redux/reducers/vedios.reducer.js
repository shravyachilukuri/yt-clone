import { HOME_VIDEOS_REQUEST,HOME_VIDEOS_FAIL,HOME_VIDEOS_SUCCESS} from "../actionTypes"

const initialState = {
  loading:false,
  nextPageToken:null,
  vedios:[],
  activeCategory:"All",
}

export const homeVediosReducer = (state=initialState, action) =>{
    console.log(state.activeCategory)
    switch(action.type){
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,   
                vedios:state.activeCategory === action.payload.category 
                ? [...state.vedios,...action.payload.vedios]
                : action.payload.vedios,
                
                loading:false,
                nextPageToken:action.payload.nextPageToken,
                activeCategory:action.payload.category,
                
            }
           
            case HOME_VIDEOS_FAIL:
                return {
                    ...state,
                    error:action.payload,
                    loading:false,
                    
                }
            case HOME_VIDEOS_REQUEST:
                return {
                    ...state,
                    loading:true,
                        
                    }
            default:
             return state
    }
    

}