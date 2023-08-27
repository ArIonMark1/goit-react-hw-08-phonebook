export const AuthErrorMessage = statusError => {
  // ***********************************************

  switch (parseInt(statusError)) {
    case 400:
      return `Wrong user data. Try again please.`;

    case 401:
      return `Incorrect authenticate.
          Missing header with authorization token.
          LogIn please.`;

    case 404:
      return `${statusError} There is no such user collection.`;

    case 500:
      return 'Warning! Something wrong with server. The server is not responding.';

    default:
      return 'Warning! Internet disconected.';
  }
};
