import { combineReducers } from 'redux';
import UtilityReducer from './UtilityReducer';
import AnotherReducer from './anotherReducer';

import PersonReducer from '../../Person/personReducer';

const rootReducer = combineReducers ({
    UtilityReducer,
    AnotherReducer,
    person: PersonReducer
});

export default rootReducer;


// const initialState = {
//     counter: 10
// }

// const root = (state = initialState, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//     }
//     return state;
// }

// export default root;