import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { useCreateContactMutation } from 'redux/features/userApi/authApi';
import './СontactForm.scss';

const INIT_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState({ ...INIT_STATE });
  // ----------------------------------------------------------------
  const [
    contactCreator,
    {
      data: contactData,
      isLoading,
      isSuccess: createdContact,
      isError: isContactError,
      error: createError,
    },
  ] = useCreateContactMutation();

  // ----------------------------------------------------------------
  const handleChangeForm = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const formSubmit = async evt => {
    evt.preventDefault();

    if (state.name && state.number) {
      await contactCreator(state);
    } else {
      toast.error('Please fill all fields.');
    }
  };

  const clearState = () => {
    setState(INIT_STATE);
  };

  // ****************************************************************

  useEffect(() => {
    if (createdContact) {
      clearState();
      toast.success(`Contact ${contactData.name} created successfully`);
      return;
    }
    if (isContactError) {
      clearState();

      toast.error(`${createError.originalStatus}. Contact didn\`t create. `);
    }
  }, [contactData, createdContact, createError, isContactError]);

  // ****************************************************************
  return (
    <form id="form" className="contactForm" onSubmit={formSubmit}>
      <label className="label" htmlFor="name">
        <h3>Name</h3>
        <input
          id="name"
          className="nameField"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChangeForm}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label" htmlFor="number">
        <h3>Number</h3>
        <input
          className="nameField"
          id="number"
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChangeForm}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        className="button contactForm__button"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <PulseLoader size={5} color="white" />}
        <span>Add contact</span>
      </button>
    </form>
  );
};

export default ContactForm;
