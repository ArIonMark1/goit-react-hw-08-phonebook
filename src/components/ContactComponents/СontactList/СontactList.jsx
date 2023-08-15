import { useGetContactsQuery } from 'redux/features/userApi/authApi';
import ContactMarkup from '../ContactMarkup';
import Loader from 'components/Loader';
import './ContactList.scss';
import { useState } from 'react';

const ContactList = () => {
  const [filter, setFilter] = useState('');
  const {
    data: contacts,
    isFetching: contactsLoad,
    isError,
    error: contactsError,
  } = useGetContactsQuery(); // тут краще працювати зі стейтом або мати на бекенді можливість брати дані по імені
  //
  const handleFilterField = ({ currentTarget }) => {
    const filterData = currentTarget.value.toLowerCase();
    setFilter(filterData);
  };
  //
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  //
  return (
    <>
      <label className="label" htmlFor="filter">
        <h3>Find contact by name</h3>
        <input
          type="text"
          name="filter"
          className="filterField"
          onChange={handleFilterField}
          placeholder="Filter contacts..."
        ></input>
      </label>
      {contactsLoad && <Loader />}
      {isError && (
        <div>
          <h2>{contactsError.status}</h2>
          <p>{contactsError.error.message}</p>
        </div>
      )}
      {contacts && (
        <ul className="contactList">
          {filteredContacts.map(contact => (
            <ContactMarkup key={contact.id} contactData={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
