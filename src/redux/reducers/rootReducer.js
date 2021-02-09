import { combineReducers } from 'redux';
import authReducer from './authReducer';
import phonebookReducer from './phonebookReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  auth: authReducer,
});

export default rootReducer;
