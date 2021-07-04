import { createStore } from 'redux';
import { applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from  "redux-thunk";
import { authReducer } from './reducers/auth.reducer';
import { homeVediosReducer} from './reducers/vedios.reducer';

const rootReducer = combineReducers({
    auth:authReducer,
    homeVedios:homeVediosReducer,
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;    