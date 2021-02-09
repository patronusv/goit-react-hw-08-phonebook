import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import HeaderStyled from './HeaderStyled';
import { isAuth } from '../../redux/selectors/authSelectors';

import LogOutMenu from '../logOutMenu/LogOutMenu';

const Header = () => {
  const isAuthenticated = useSelector(isAuth);

  return (
    <HeaderStyled>
      {isAuthenticated
        ? mainRoutes.map(
            route =>
              !route.restricted && (
                <NavLink to={route.path} key={route.name} exact={route.exact} className="navlink" activeClassName="navlink-active">
                  {route.name}
                </NavLink>
              ),
          )
        : mainRoutes.map(
            route =>
              !route.private && (
                <NavLink to={route.path} key={route.name} exact={route.exact} className="navlink" activeClassName="navlink-active">
                  {route.name}
                </NavLink>
              ),
          )}
      {isAuthenticated && <LogOutMenu />}
    </HeaderStyled>
  );
};

export default Header;
