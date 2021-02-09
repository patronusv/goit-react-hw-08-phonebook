import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInOperation } from '../redux/operations/authOperations';
import SignInWrapper from './SignInPageStyled';

const initialState = {
  email: '',
  password: '',
};
const SignInPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(signInOperation(state));
    setState(initialState);
  };
  const { email, password } = state;
  return (
    <SignInWrapper>
      <h2 className="page-title">Sign In</h2>
      <form onSubmit={onHandleSubmit}>
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
          Login
        </button>
      </form>
    </SignInWrapper>
  );
};

export default SignInPage;
