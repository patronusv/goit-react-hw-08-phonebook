import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import HeaderStyled from './HeaderStyled';
import { isAuth, getUserName } from '../../redux/selectors/authSelectors';
import { logOutOperation } from '../../redux/operations/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);
  const userName = useSelector(getUserName);

  const onLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <HeaderStyled>
      {mainRoutes.map(({ path, name, exact }) => (
        <NavLink to={path} key={name} exact={exact} className="navlink" activeClassName="navlink-active">
          {name}
        </NavLink>
      ))}
      {isAuthenticated && (
        <div>
          <span>Hello, {userName}</span>
          <button type="button" onClick={onLogOut}>
            Log Out
          </button>
        </div>
      )}
    </HeaderStyled>
  );
};

export default Header;
