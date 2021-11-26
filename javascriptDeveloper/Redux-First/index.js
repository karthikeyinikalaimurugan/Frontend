import store from "./store";
import * as actions from './actionTypes';
import {bugAdded, bugRemoved} from './actions';
const unsubscribe = store.subscribe(()=>{
    console.log("store Changed", store.getState)
});

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugRemoved());
console.log(store.getState);