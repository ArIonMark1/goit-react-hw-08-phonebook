import { HandleUserData } from 'hooks/handleUserData';
import Loader from 'components/Loader';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    width: '100%',
    padding: '0 15px',
    position: 'fixed',
    gap: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
  },
};

const HomePage = () => {
  const { data, isLoading, isSuccess } = HandleUserData();

  // console.log('First start: ', isUninitialized);
  if (isLoading) {
    return (
      <div style={styles.container}>
        <Loader />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div style={styles.container}>
        <>
          <img
            src="https://ih1.redbubble.net/image.5075891342.0210/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
            width={300}
            alt="avatar"
          />
        </>
        <h2
          style={styles.title}
        >{`Greeting ${data.name?.toUpperCase()}. Welcome to the phone book site :-)`}</h2>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {
          'Welcome to the phone book site. Please register or log-in to continue using all the features of the site.'
        }
      </h2>
    </div>
  );
};

export default HomePage;
