import { useGetContactsQuery } from 'redux/features/authApi/authApi';
import ContactMarkup from '../ContactMarkup';
import Loader from 'components/Loader';
import './ContactList.scss';

const ContactList = () => {
  const {
    data: contacts,
    isFetching: contactsLoad,
    isError,
    error: contactsError,
  } = useGetContactsQuery();

  //
  return (
    <>
      <label className="label">
        <p>Find contact by name</p>
        <input
          type="text"
          name="filter"
          className="filterField"
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
        <ol className="contactList">
          {contacts.map(contact => (
            <ContactMarkup key={contact.id} contactData={contact} />
          ))}
        </ol>
      )}
    </>
  );
};

export default ContactList;
