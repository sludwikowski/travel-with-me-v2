import { makeRequest } from './makeRequest';
import { VITE_MY_VAR_KEY } from './const';

const PASSWORD_RESET_EMAIL_URL = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${VITE_MY_VAR_KEY}`;

export const sendPasswordResetEmail = (email) =>
  makeRequest(PASSWORD_RESET_EMAIL_URL, {
    method: 'POST',
    body: JSON.stringify({
      requestType: 'PASSWORD_RESET',
      email,
    }),
  });

export default sendPasswordResetEmail;
