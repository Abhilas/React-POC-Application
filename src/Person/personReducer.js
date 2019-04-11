import * as Actions from './actions';

const initialState = {
    personArr: []
}

const personReducer = (state=initialState, action) => {
    switch(action.type) {
        case Actions.ADD_PERSON: 
            return {
                ...state,
                personArr: state.personArr.concat(action.name)
            }
    }

    return state;
}

export default personReducer;