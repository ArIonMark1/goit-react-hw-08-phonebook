import { useDeleteContactMutation } from 'redux/features/userApi/authApi';
import { PulseLoader } from 'react-spinners';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import './ContactMarkup.scss';

const ContactMarkup = ({ contactData }) => {
  //
  const [
    deleteContact,
    { data: deletedContact, isSuccess, isError, isLoading, error },
  ] = useDeleteContactMutation();

  const handleDeleteContact = async () => {
    await deleteContact(contactData.id);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact ${deletedContact.name} has been deleted.`);
    }
    if (isError) {
      toast.error(`${error} cannot delete.`);
    }
  }, [deletedContact, error, isError, isSuccess]);

  return (
    <li className="contactList__row">
      <div className="contact-content">
        <p>
          <span className="title">Name: </span>
          <span className="text"> {contactData.name}</span>
        </p>
        <p>
          <span className="title">Number: </span>
          <span className="text"> {contactData.number}</span>
        </p>
        <p>
          <span className="title dataContent">Created: </span>
          <span className="text dataContent"> {contactData.number}</span>
        </p>
        <button
          className="button"
          type="submit"
          disabled={isLoading}
          onClick={handleDeleteContact}
        >
          {isLoading && <PulseLoader size={5} color="white" />}
          <span>Delete contact</span>
        </button>
      </div>
    </li>
  );
};

export default ContactMarkup;
