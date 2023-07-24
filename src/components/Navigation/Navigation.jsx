import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLogin = useSelector(selectIsLogedIn);
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
