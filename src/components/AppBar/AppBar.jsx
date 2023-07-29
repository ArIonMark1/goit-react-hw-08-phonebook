import './AppBar.scss';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/selectors';

const AppBar = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  // console.log('isLogedIn: ', isLogedIn);
  return (
    <header className="header">
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
