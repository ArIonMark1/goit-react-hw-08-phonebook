import React from 'react';
// import ContactForm from 'components/contactComponents/ContactForm';
// import ContactList from 'components/contactComponents/ContactList';
import ContactList from './components/ContactComponents/ContactList';
import ContactForm from './components/ContactComponents/ContactForm';

const ContactsPage = () => {
  return (
    <div className="container">
      <h2>Phone Book</h2>

      <div className="contactContainer">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
