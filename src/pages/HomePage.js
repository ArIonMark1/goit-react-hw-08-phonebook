import { SyncLoader } from 'react-spinners';
import { HandleUserData } from 'hooks/handleUserData';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    padding: '0 15px',
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

  if (isLoading) {
    return (
      <div style={styles.container}>
        {
          <div className="loaderBlock">
            <SyncLoader
              color="steelblue"
              cssOverride={{
                margin: '0 auto',
              }}
              size={18}
            />
            <p>Loading content...</p>
          </div>
        }
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div style={styles.container}>
        <>
          {/* {data.avatar && ( */}
          <img
            src="https://ih1.redbubble.net/image.5075891342.0210/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
            width={300}
            alt="avatar"
          />
          {/* )} */}
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
