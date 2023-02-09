import { logOut } from './logOut';
import { makeRequest } from './makeRequest';
import { getIdToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const DELETE_USER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${VITE_MY_VAR_KEY}`;

export const deleteUser = () => {
  const token = getIdToken();

  if (!token) return Promise.reject(new Error('No token found'));

  return makeRequest(DELETE_USER_URL, {
    method: 'POST',
    body: JSON.stringify({
      idToken: token,
    }),
  }).then((data) => {
    logOut();
    return data;
  });
};

export default deleteUser;
