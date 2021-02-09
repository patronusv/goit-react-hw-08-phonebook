import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserOperation } from '../redux/operations/authOperations';
import { isAuth } from '../redux/selectors/authSelectors';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
      return;
    }
    dispatch(getUserOperation());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
      return;
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
