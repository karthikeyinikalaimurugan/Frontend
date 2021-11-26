import * as actions from './actionTypes';
export const bugAdded = description => ({
        type: actions.BUG_ADDED,
        payload: {
        description
    }
});
export const bugRemoved = () => ({
        type: actions.BUG_REMOVE,
        payload: {
        id: 1
    }
});
export const bugResolved = id =>({
        type: actions.BUG_RESOLVED,
        payload: {
        id
    }
})