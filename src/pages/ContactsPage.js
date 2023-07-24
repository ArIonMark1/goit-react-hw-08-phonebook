import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import ContactForm from 'components/ContactForm';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import ContactList from 'components/ContactList';
import { selectContactsState } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContactsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Phone Book</h2>
      <ContactForm />
      {isLoading && (
        <div className="loaderBlock">
          <SyncLoader
            color="steelblue"
            cssOverride={{
              margin: '0 auto',
            }}
            size={18}
          />
          <p>Loading tasks...</p>
        </div>
      )}
      {error && <p className="errorBlock">{error}</p>}

      {items.length !== 0 && (
        <>
          <FilterContacts />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
