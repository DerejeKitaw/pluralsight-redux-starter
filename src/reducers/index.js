import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses //short hand ES6 reducer
});

export default rootReducer;
