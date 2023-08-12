import ContactForm from 'components/contactComponents/ContactForm';
import ContactList from 'components/contactComponents/ContactList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsPage = () => {
  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2>Phone Book</h2>

      <div className="contactContainer">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
