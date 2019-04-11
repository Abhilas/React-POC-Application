import * as ActionTypes from './ActionTypes';
import Axios from 'axios';

export const loginSubmit = () => {
    return {
        type: ActionTypes.Login_Submit
    }
}

export const loginUsername = (usrName) => {
    return {
        type: ActionTypes.Login_Username,
        userName: usrName
    }
}

export const loginPassword = (pasWord) => {
    return {
        type: ActionTypes.Login_Password,
        passWord: pasWord
    }
}

export const getData = (data) => {
    return {
        type: ActionTypes.InitData,
        data: data
    }
}

export const getInitialData = () => {
    const dataToPost = {
        'item': 'Butter Milk'
    }
    return dispatch => {
        Axios.get('https://react-organic-shop-e9b84.firebaseio.com/ProductDetails/Products/Diary.json')
            .then (response => {
                const filterDATA = [];
                for(let key in response.data){
                    filterDATA.push({
                        ...response.data[key], 
                        id: key
                    });
                }
                dispatch(getData(filterDATA));
            })
            .catch (error => {
                console.log('error in Axios...');
            })
    }
}