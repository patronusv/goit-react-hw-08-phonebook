import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  logOutSuccess,
  logOutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../actions/authActions';

const initialState = { name: '', email: '' };

const userReducer = createReducer(initialState, {
  [signUpSuccess]: (_, { payload }) => payload.user,
  [signInSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logOutSuccess]: () => initialState,
});
const tokenReducer = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [signInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});
const errorReducer = createReducer(null, {
  [signUpError]: (_, { payload }) => payload,
  [signInError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default authReducer;
