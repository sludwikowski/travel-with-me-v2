import { makeRequest } from './makeRequest';
import { setIdToken, setRefreshToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${VITE_MY_VAR_KEY}`;

export const signIn = (email, password) =>
  makeRequest(SIGN_IN_URL, {
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

export default signIn;
