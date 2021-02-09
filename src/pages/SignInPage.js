import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInOperation } from '../redux/operations/authOperations';

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
    console.log('state', state);
    dispatch(signInOperation(state));
    setState(initialState);
  };
  const { email, password } = state;
  return (
    <div>
      <h2>SignInPage</h2>
      <form onSubmit={onHandleSubmit}>
        <input type="text" autoComplete="off" autoFocus placeholder="Enter email" onChange={onHandleChange} value={email} name="email" />
        <input type="password" autoComplete="off" autoFocus placeholder="Enter password" onChange={onHandleChange} value={password} name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
