import { combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    testReducer,
});

export default rootReducer;
