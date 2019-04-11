import * as Actions from '../../State/Reducer/actionTypes';

const initialState = {
    counter: 0
}

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case Actions.INCREMENT : 
            return {
                ...state,
                counter: state.counter + 1
            }
        case Actions.DECREMENT : 
            return {
                ...state,
                counter: state.counter - 1
            }
    }

    return state;
}

export default reducer1;