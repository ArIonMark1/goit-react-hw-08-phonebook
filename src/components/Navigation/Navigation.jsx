import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { HandleUserData } from 'hooks/handleUserData';

const Navigation = () => {
  const { data: isLogin } = HandleUserData();

  return (
    <nav className="navBlock">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className="link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
