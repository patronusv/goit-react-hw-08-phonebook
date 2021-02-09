import { useDispatch, useSelector } from 'react-redux';
import { logOutOperation } from '../../redux/operations/authOperations';
import { getUserName } from '../../redux/selectors/authSelectors';
import LogOutMenuStyled from './LogOutMenuStyled';

const LogOutMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const onLogOut = () => {
    dispatch(logOutOperation());
  };
  return (
    <LogOutMenuStyled>
      <span className="logOutMenuText">Hello, {userName}</span>
      <button className="logOutMenuButton" type="button" onClick={onLogOut}>
        Log Out
      </button>
    </LogOutMenuStyled>
  );
};

export default LogOutMenu;
