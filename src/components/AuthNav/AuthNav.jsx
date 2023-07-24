import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = () => {
  return (
    <div className="wrapper">
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
