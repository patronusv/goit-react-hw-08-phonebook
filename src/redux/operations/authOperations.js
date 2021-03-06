import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../actions/authActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpOperation = data => async dispatch => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(`/users/signup`, data);
    token.set(response.data.token);
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error));
  }
};
export const signInOperation = data => async dispatch => {
  dispatch(signInRequest());
  try {
    const response = await axios.post(`/users/login`, data);
    token.set(response.data.token);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};
export const logOutOperation = () => async dispatch => {
  dispatch(logOutRequest());
  try {
    await axios.post(`/users/logout`);
    token.unset();
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error));
  }
};
export const getUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();
  if (!persistToken) return;
  token.set(persistToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get(`/users/current`);
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
