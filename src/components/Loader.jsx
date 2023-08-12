import { SyncLoader } from 'react-spinners';

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

const Loader = () => {
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
};

export default Loader;
