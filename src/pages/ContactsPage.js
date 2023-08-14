import React from 'react';
import ContactForm from 'components/contactComponents/ContactForm';
import ContactList from 'components/contactComponents/ContactList';

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
