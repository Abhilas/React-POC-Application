import * as Actions from './actionTypes';

const initialState = {
    click: 0
}

const anotherReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.INCREMENT :
            return {
                ...state,
                click: action.counterVal + 100
            }
    }

    return state;
}

export default anotherReducer;

