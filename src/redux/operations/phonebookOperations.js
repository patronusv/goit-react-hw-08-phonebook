import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from '../actions/phonebookActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const operationAddContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post(`/contacts`, contact);
    console.log('response', response);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const operationGetContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(`/contacts`);
    if (response.data) {
      const contacts = Object.keys(response.data).map(key => ({
        ...response.data[key],
        id: key,
      }));

      dispatch(getContactsSuccess(contacts));
    } else dispatch(getContactsSuccess([]));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const operationDeleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
