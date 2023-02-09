import { makeRequest } from './makeRequest';
import { setIdToken, setRefreshToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${VITE_MY_VAR_KEY}`;

export const signUp = (email, password) =>
  makeRequest(SIGN_UP_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  }).then((data) => {
    setIdToken(data.idToken);
    setRefreshToken(data.refreshToken);

    return data;
  });

export default signUp;
