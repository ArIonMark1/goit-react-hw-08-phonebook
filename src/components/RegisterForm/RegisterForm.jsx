import { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import {
  useUserLoginMutation,
  useUserRegisterMutation,
} from 'redux/features/authApi/authApi';
import './RegisterForm.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/features/authApi/tokenSlice';
import { ErrorMessage } from 'components/ErrorMessage';

const INIT_STATE = {
  name: '',
  email: '',
  password: '',
  avatar:
    'https://ih1.redbubble.net/image.5075891342.0210/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg',
};

const RegisterForm = () => {
  const navigate = useNavigate();
  // ----------------------------------------------------------------
  const [createUser, { isLoading, isError, error }] = useUserRegisterMutation();
  const [login] = useUserLoginMutation();
  // ----------------------------------------------------------------
  const dispatch = useDispatch();
  const controlMessage = ErrorMessage();
  const [state, setState] = useState({ ...INIT_STATE });

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async evt => {
    evt.preventDefault();

    try {
      // ***********************************************
      const createdUser = await createUser(state);
      // ***********************************************
      if (createdUser.error) {
        throw new Error(createdUser.error.status);
      }
      if (createdUser.data) {
        // ***********************************************
        console.log('Created user: ', createdUser.data);
        // const { data } = await login({
        //   email: state.email,
        //   password: state.password,
        // });
        // console.log('From register login: ', data);
        dispatch(setToken(createdUser.data.token));
        // ***********************************************
        toast.success(`User ${state.name} created successfully`);
        setState(INIT_STATE); // ???????? чистим стейт поки користувач в системі ???
        navigate('/');
      }
    } catch (error) {
      toast.error(controlMessage(error.message));
      setState(INIT_STATE);
    }
  };

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        {isLoading && (
          <SyncLoader
            color="steelblue"
            cssOverride={{
              margin: '0 auto',
            }}
            size={16}
          />
        )}
        <label className="label">
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={state.password}
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
