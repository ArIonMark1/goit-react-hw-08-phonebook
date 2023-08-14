import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = () => {
  return (
    <div className="authBlock">
      <NavLink className="link" to="/registration">
        Registration
      </NavLink>
      <NavLink className="link" to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
