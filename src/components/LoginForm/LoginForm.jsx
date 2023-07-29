import './LoginForm.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from 'redux/auth/auth-operations';
import { selectError, selectIsLogedIn } from 'redux/auth/selectors';
import { ErrorMessage } from 'components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLogedIn = useSelector(selectIsLogedIn);
  // console.log('isLogedIn: ', isLogedIn);
  const onSubmitForm = evt => {
    evt.preventDefault();

    dispatch(userLogIn({ email, password }));
    // =================================================================
    // console.log('Before isLogedIn: ');
    // console.log('isLogedIn: ', isLogedIn);
    // console.log('Selector isLogedIn: ', isLogedIn);
    fetchCurrentUser();
    if (isLogedIn) {
      console.log('isLogedIn: ', isLogedIn);
      navigate('/', { replace: true });
    }
    // console.log('After isLogedIn: ');
    // console.log('isLogedIn: ', isLogedIn);
    // =================================================================
    // if (isLogedIn) {
    //   navigate('/login', { replace: true });
    // }
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form className="form" onSubmit={onSubmitForm}>
        {error && <ErrorMessage />}
        <label className="label">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={evt => setEmail(evt.currentTarget.value)}
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={evt => setPassword(evt.currentTarget.value)}
          />
        </label>
        <button className="form__button button" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
