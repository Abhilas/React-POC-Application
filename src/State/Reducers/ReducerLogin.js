import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    usrname:'',
    password:'',
    initData: null
}

const ReducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Login_Username:
            return {
                ...state,
                usrname: action.userName
            }
        case ActionTypes.Login_Password:
            return {
                ...state,
                password: action.passWord
            }
        case ActionTypes.InitData:
            return {
                ...state,
                initLoginData: action.data
            }
    }
    return state;
}

export default ReducerLogin;