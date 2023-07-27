import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectError } from 'redux/auth/selectors';
import { selectContactsState } from 'redux/contacts/selectors';
import { selectContactsError } from 'redux/contacts/selectors';

export const ErrorMessage = () => {
  const [customMessage, setCustomMessage] = useState('');

  const contactsError = useSelector(selectContactsError);
  const authError = useSelector(selectError);

  const error = contactsError || authError;
  useState(() => {
    if (!error) {
      return;
    }
    console.log(error);
    const codeArray = error
      .split('')
      .filter(el => parseInt(el) || parseInt(el) === 0)
      .join('');

    switch (parseInt(codeArray)) {
      case 400:
        setCustomMessage(`${error}. Wrong user data. Try again please.`);
        break;
      case 401:
        setCustomMessage(
          'Incorrect authenticate . Missing header with authorization token.'
        );
        break;
      case 404:
        setCustomMessage('There is no such user collection.');
        break;
      case 500:
        setCustomMessage(
          'Warning! Something wrong with server. The server is not responding.'
        );
        break;
      default:
        setCustomMessage('Warning! Internet disconected.');
        break;
    }
  }, [error]);

  return (
    <div className="containerMessage">
      <p className="errorMessage">{customMessage}</p>
    </div>
  );
};
