import { useState } from 'react';
import './ContactForm.scss';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { createContacts } from 'redux/contacts/operations';

export default function ContactForm() {
  //   //форма додавання контакту
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);
  const formReset = () => {
    setName('');
    setNumber('');
  };

  function formSubmit(evt) {
    /* відправка даних контакту при сабміті, перевірка на співпадіння та пусте ім'я  */
    evt.preventDefault();
    const controlName = !name.trim() ? 'empty' : name.trim();
    console.log(name, number);
    const dublicatedContact = listContacts.find(
      contact => contact.name === controlName && contact.phone === number
    );
    if (dublicatedContact) {
      toast.error(`${controlName} already in contacts.`);
      formReset();
      return;
    }
    // ===================================================
    dispatch(createContacts({ name: controlName, number }));
    // ===================================================
    toast.success(`${controlName} added to contacts.`);
    formReset();
  }

  return (
    <form id="form" className="contactForm form" onSubmit={formSubmit}>
      <label className="label">
        Name
        <br />
        <input
          className="nameField"
          type="text"
          name="name"
          value={name}
          onChange={evt => setName(evt.currentTarget.value)}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label">
        Number
        <br />
        <input
          className="nameField"
          type="tel"
          name="number"
          value={number}
          onChange={evt => setNumber(evt.currentTarget.value)}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="button createContact" type="submit">
        <span>Add contact</span>
      </button>
    </form>
  );
}
