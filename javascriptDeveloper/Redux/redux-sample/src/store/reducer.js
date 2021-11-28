const initialState = {
    age: 21
};

const reducer = (state = initialState, action) => {
    // const newState = {...state};

    if(action.type === 'AGE_UP') {
        state.age++;
    }
    if(action.type === 'AGE_DOWN') {
        state.age--;
    }
    if(action.type === 'SET_NAME') {
        state.name = action.payload;
    }
    return state;
}

export default reducer;