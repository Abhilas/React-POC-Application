import * as Actions from './actionTypes';

const initialState = {
    counter: 0
}

const UtilityReducer = (state = initialState, action) => {
    console.log(Actions);
    switch(action.type) {
        case Actions.INCREMENT : 
            return {
                ...state,
                counter: state.counter + 100
            }
    }

    return state;
}

export default UtilityReducer;