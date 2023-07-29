import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from 'redux/auth/auth-operations';
import { selectError, selectIsLogedIn } from 'redux/auth/selectors';
import { ErrorMessage } from 'components/ErrorMessage';
import './RegisterForm.scss';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLogInn = useSelector(selectIsLogedIn);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        alert('Wrong operation.');
        break;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    console.log({ name, email, password });
    // ==============================================
    dispatch(userRegister({ name, email, password }));
    // ==============================================

    if (isLogInn) {
      navigate('/', { replace: true });
    }
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        {error && <ErrorMessage />}
        <label className="label">
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button className="form__button button" type="submit">
          Registration
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
