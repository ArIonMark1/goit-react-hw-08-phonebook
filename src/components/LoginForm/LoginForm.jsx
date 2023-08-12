import './LoginForm.scss';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from 'redux/features/authApi/authApi';
import { setToken } from 'redux/features/authApi/tokenSlice';
import { ErrorMessage } from 'components/ErrorMessage';

const INIT_STATE = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [state, setState] = useState({ ...INIT_STATE });
  // ****************************************************************
  const [
    login,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: IsLoginError,
      error: loginError,
    },
  ] = useUserLoginMutation();
  // ****************************************************************
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const controlError = ErrorMessage();

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const onSubmitForm = async evt => {
    evt.preventDefault();

    if (state.email && state.password) {
      await login(state);
    } else {
      toast.error('Please fill all fields.');
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // ----------------------------------------------------------------
      dispatch(setToken(loginData.token));
      // ----------------------------------------------------------------
      toast.success(`Welcome back ${state.email}`);
      navigate('/');
      // =================================================================
    }
    if (IsLoginError) {
      setState(INIT_STATE);
      // -------------------------------------------
      toast.error(`Sorry you can't log in. ${controlError(loginError.status)}`);
      // -------------------------------------------
    }
  }, [
    isLoginSuccess,
    IsLoginError,
    controlError,
    loginError,
    loginData,
    navigate,
    dispatch,
    state,
  ]);

  return (
    <>
      <form className="form" onSubmit={onSubmitForm}>
        <label className="label">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
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
