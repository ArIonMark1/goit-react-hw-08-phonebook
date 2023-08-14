import { useDispatch, useSelector } from 'react-redux';
import './UserMenu.scss';
import { logOut } from 'redux/features/userApi/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { useUserLogOutMutation } from 'redux/features/userApi/authApi';
import { selectToken } from 'redux/features/userApi/selectors';

const UserMenu = ({ userName }) => {
  const [logOutAction] = useUserLogOutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeToken = useSelector(selectToken);

  const handleLogOut = () => {
    logOutAction(activeToken);
    dispatch(logOut());
    navigate('/login');
  };
  return (
    <div className="wrapper">
      <p className="username">
        Welcome <span>"{userName}"</span>
      </p>
      <button
        type="button"
        className="button logOutButton"
        onClick={handleLogOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;
