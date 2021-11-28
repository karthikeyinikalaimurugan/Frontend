import {initialState} from './../index';
import { LOGIN, LOGOUT } from '../actionTypes';
const AuthReducer =  (state = initialState,action) => {
    switch(action.type){
        case LOGIN:
            state = {...state,user:action.payload};
            break;
        case LOGOUT:
            state = {...state,user:false,isLogged:false};
            break;
        default:
            return state;
    }
    console.log('statereducer', state);
    return state;
}

export default AuthReducer;
