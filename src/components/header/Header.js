import { NavLink } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import HeaderStyled from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      {mainRoutes.map(({ path, name, exact }) => (
        <NavLink to={path} exact={exact} className="navlink" activeClassName="navlink-active">
          {name}
        </NavLink>
      ))}
    </HeaderStyled>
  );
};

export default Header;
