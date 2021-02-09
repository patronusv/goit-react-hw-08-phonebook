import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpOperation } from '../redux/operations/authOperations';
import SignUpWrapper from './SignUpPageStyled';

const initialState = {
  name: '',
  email: '',
  password: '',
};
const SignUpPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    console.log('state', state);
    dispatch(signUpOperation(state));
    setState(initialState);
  };
  const { name, email, password } = state;
  return (
    <SignUpWrapper>
      <h2 className="page-title">Sign Up</h2>
      <form onSubmit={onHandleSubmit}>
        <label className="form-label">
          Name:
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter name"
            onChange={onHandleChange}
            value={name}
            name="name"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter email"
            onChange={onHandleChange}
            value={email}
            name="email"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            autoComplete="off"
            autoFocus
            placeholder="Enter password"
            onChange={onHandleChange}
            value={password}
            name="password"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUpPage;
