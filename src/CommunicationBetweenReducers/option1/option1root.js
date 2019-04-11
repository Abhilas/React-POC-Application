import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';

const option1root = combineReducers({
    reducer1,
    reducer2
});

export default option1root;
