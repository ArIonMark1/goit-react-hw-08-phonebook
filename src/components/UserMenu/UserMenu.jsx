import './UserMenu.scss';
import { useSelector } from 'react-redux';
import { selectIsLogedIn, selectUserData } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  // const { name } = useSelector(selectUserData);
  const isLogedIn = useSelector(selectIsLogedIn);
  const navigate = useNavigate();

  const logOutAction = evt => {
    evt.preventDefault();
    // console.log('isLogedIn: ', isLogedIn);
    dispatch(userLogOut());
    if (isLogedIn) {
      // console.log('isLogedIn: ', isLogedIn);
      navigate('/login', { replace: true });
    }
    console.log('isLogedIn: ', isLogedIn);
  };

  return (
    <div className="wrapper">
      <p className="username">
        Welcome <span>{name}</span>
      </p>
      <button type="button" className="button" onClick={logOutAction}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
