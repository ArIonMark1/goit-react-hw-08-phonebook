import './LoginForm.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/auth/auth-operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmitForm = evt => {
    evt.preventDefault();
    console.log(email, ': ', password);
    dispatch(userLogIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <form className="form" onSubmit={onSubmitForm}>
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
  );
};

export default LoginForm;
