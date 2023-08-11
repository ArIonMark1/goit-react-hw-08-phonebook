import { useDispatch } from 'react-redux';
import './UserMenu.scss';
import { logOut } from 'redux/features/authApi/tokenSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ userName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };
  return (
    <div className="wrapper">
      <p className="username">
        Welcome <span>"{userName}"</span>
      </p>
      <button type="button" className="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
