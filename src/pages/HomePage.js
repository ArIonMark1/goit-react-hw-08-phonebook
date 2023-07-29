// import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserData } from 'redux/auth/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  const { name } = useSelector(selectUserData);
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {name
          ? `Greeting ${name.toUpperCase()}. Welcome to the phone book site :-)`
          : 'Welcome to the phone book site. Please register or log-in to continue using all the features of the site.'}
      </h2>
    </div>
  );
};

export default HomePage;
