import { combineReducers } from 'redux';

import ReducerLogin from './ReducerLogin';
import ReducerRegister from './ReducerRegister';

const CombineReducers = combineReducers({
    Login: ReducerLogin,
    Register: ReducerRegister
});

export default CombineReducers;