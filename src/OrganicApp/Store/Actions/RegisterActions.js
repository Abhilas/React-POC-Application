import * as RegisterActions from './ActionTypes';
import Axios from 'axios';

export const RegisterUser = (appStatus) => {
    return {
        type: RegisterActions.Register,
        status: appStatus
    }
}

export const RegisterUserAction = (userObj) => {
    let requestStatus = false;
    return (dispatch) => {
        Axios.post('https://react-organic-shop-users.firebaseio.com/Users.json', userObj)
            .then (response => {
                switch (response.status) {
                    case 200 :
                        requestStatus = true;
                        return Axios.get('https://react-organic-shop-users.firebaseio.com/Users.json');
                    default :
                        break;
                }
            })
            .then (response => {
                let userData = [];
                for(let usr in response.data) {
                    userData.push ({
                        ...response.data[usr],
                        id: usr
                    });
                } 
                dispatch(RegisterUser(requestStatus));             
                dispatch(LoadData(userData));
                dispatch(spinner(false));
            })
            .catch (error => {
                console.log('error in Register Axios...');
            })
        console.log('From Form...');
    }
}

export const FieldElementChange = (fieldVal, fieldIdentifier) => {
    return {
        type: RegisterActions.ElementChange,
        value: fieldVal,
        identifier: fieldIdentifier
    }
}

export const UpdateStore = (value, identifier) => {
    return (dispatch) => {
        dispatch(FieldElementChange(value, identifier));
    }
}

export const LoadData = (usrData) => {
    return {
        type: RegisterActions.LoadUserDetails,
        userDetails: usrData
    }
}

export const spinner = (status) => {
    return {
        type: RegisterActions.ShowSpinner,
        loading: status
    }
}

export const ShowHideSpinner = (loadStatus) => {
    return (dispatch) => {
        dispatch(spinner(loadStatus));
    }
}