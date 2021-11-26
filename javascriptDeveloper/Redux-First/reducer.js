import * as action from './actionTypes';
let state = [];
let lastId = 0;
export default function reducer(state=[],action) {
    // if(action.type === 'bugAdded')
    // return [
    //     ...state,
    //     {   id: ++lastId,
    //         title: action.payload.title,
    //         description: action.payload.description,
    //         resolved: false
    //     }
    // ];
    // else if (action.type === 'bugRemoved')
    //     return state.filter(bug => bug.id !== action.payload.id);
    // return state;

    switch(action.type) {
        case actions.BUG_ADDED:
            return [
                    ...state,
                    {   id: ++lastId,
                        title: action.payload.title,
                        description: action.payload.description,
                        resolved: false
                    }
                ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case action.BUG_RESOLVED:
            return state.map(bug =>
                bug.id !== action.payload.id ? bug :
                {...bug, resolved: true })
        default:
            return state;
    }
}

// action
let action = {type: 'NEW_ORDER', payload: 'Coffee'}

let store = Redux.createStore(reducer);
store.dispatch(action);
console.log(store.getState());