import './LoginForm.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from 'redux/features/authApi/authApi';
import { setToken } from 'redux/features/authApi/tokenSlice';

const INIT_STATE = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [state, setState] = useState({ ...INIT_STATE });
  const [login] = useUserLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmitForm = async evt => {
    evt.preventDefault();

    try {
      // ***********************************************
      const logedInUser = await login(state);
      // ***********************************************
      if (logedInUser.error) {
        throw new Error(logedInUser.error.data.message);
      }
      // =================================================================
      if (logedInUser.data) {
        // ----------------------------------------------------------------
        dispatch(setToken(logedInUser.data.access_token));
        // ----------------------------------------------------------------
        toast.success(`Welcome back ${state.email}`);
        setState(INIT_STATE);
        navigate('/');
      }
      // =================================================================
    } catch (err) {
      toast.error(`Sorry you can't log in. ${err.message}`);
      setState(INIT_STATE);
    }
  };
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
