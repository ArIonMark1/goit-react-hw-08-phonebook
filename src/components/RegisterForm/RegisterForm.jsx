import { useEffect, useState } from 'react';
import { useUserRegisterMutation } from 'redux/features/authApi/authApi';
import './RegisterForm.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/features/authApi/tokenSlice';
import { AuthErrorMessage } from 'hooks/AuthErrorMessage';
import './RegisterForm.scss';

const INIT_STATE = {
  name: '',
  email: '',
  password: '',
  avatar:
    'https://ih1.redbubble.net/image.5075891342.0210/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg',
};

const RegisterForm = () => {
  const [state, setState] = useState({ ...INIT_STATE });
  // ----------------------------------------------------------------
  const [
    createUser,
    {
      data: createdUser,
      isSuccess: isCreateSuccess,
      isError: isCreateError,
      error: createError,
    },
  ] = useUserRegisterMutation();

  // ----------------------------------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async evt => {
    evt.preventDefault();

    if ((state.name, state.email, state.password)) {
      await createUser(state);
    } else {
      toast.error('Please fill all fields.');
    }
  };
  const clearState = () => {
    setState(INIT_STATE);
  };

  // ****************************************************************
  useEffect(() => {
    if (isCreateSuccess) {
      // -----------------------------------------
      dispatch(setToken(createdUser.token));
      // -----------------------------------------
      console.log(createdUser);
      toast.success(`User ${createdUser.user.name} created successfully`);
      navigate('/');
    }
    if (isCreateError) {
      toast.error(AuthErrorMessage(createError.status));
      clearState();
    }
  }, [
    isCreateSuccess,
    isCreateError,
    createError,
    createdUser,
    navigate,
    dispatch,
  ]);

  // ****************************************************************

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
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
