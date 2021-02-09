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
      {mainRoutes.map(({ path, name, exact }) => (
        <NavLink to={path} key={name} exact={exact} className="navlink" activeClassName="navlink-active">
          {name}
        </NavLink>
      ))}
      {isAuthenticated && <LogOutMenu />}
    </HeaderStyled>
  );
};

export default Header;
