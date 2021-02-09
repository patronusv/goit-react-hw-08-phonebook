import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOperation } from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOperation());
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
