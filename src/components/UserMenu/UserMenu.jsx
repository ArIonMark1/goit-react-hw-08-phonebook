import './UserMenu.scss';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserData);
  return (
    <div className="wrapper">
      <p className="username">
        Welcome <span>{name}</span>
      </p>
      <button
        type="button"
        className="button"
        onClick={() => dispatch(userLogOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
