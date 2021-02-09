import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpOperation } from '../redux/operations/authOperations';

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
    <div>
      <h2>SignUpPage</h2>
      <form onSubmit={onHandleSubmit}>
        <input type="text" autoComplete="off" autoFocus placeholder="Enter name" onChange={onHandleChange} value={name} name="name" />
        <input type="text" autoComplete="off" autoFocus placeholder="Enter email" onChange={onHandleChange} value={email} name="email" />
        <input type="password" autoComplete="off" autoFocus placeholder="Enter password" onChange={onHandleChange} value={password} name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
