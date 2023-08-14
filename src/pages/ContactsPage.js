import React from 'react';
import ContactForm from 'components/ContactComponents/СontactForm/СontactForm';
import ContactList from 'components/ContactComponents/СontactList/СontactList';

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
