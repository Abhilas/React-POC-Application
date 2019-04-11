import * as Actions from '../../State/Reducer/actionTypes';

const initialState = {
    counterView: 0
}

const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case Actions.INCREMENT : 
            return {
                ...state,
                counterView: (action.counterVal + 1) * 2
            }
        case Actions.DECREMENT : 
            return {
                ...state,
                counterView: (action.counterVal - 1) * 2
            }
    }

    return state;
}

export default reducer2;