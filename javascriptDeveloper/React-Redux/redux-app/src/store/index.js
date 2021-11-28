import {createStore} from 'redux';
import reducer from './reducer';

export const initialState = {
    user: false,
    isLoggedIn:false,
};
const store = createStore(reducer);
export default store;