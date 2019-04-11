import * as RegisterActions from '../Actions/ActionTypes';

const initialState = {
    appStatus: false,
    firstName: '',
    lastName: '',
    userDetails: [],
    loading: false
}

const ReducerRegister = (state = initialState, action) => {
    switch (action.type) {
        case RegisterActions.Register :
            return {
                ...state,
                appStatus: action.status
            }
        case RegisterActions.ElementChange :
            return {
                ...state,
                [action.identifier]: action.value
            }
        case RegisterActions.LoadUserDetails :
            return {
                ...state,
                userDetails: action.userDetails
            }
        case RegisterActions.ShowSpinner :
            return {
                ...state,
                loading: action.loading
            }
    }

    return state;
}

export default ReducerRegister;