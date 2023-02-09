import { makeRequest } from './makeRequest';
import { getIdToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const GET_USER_DATA_URL = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${VITE_MY_VAR_KEY}`;

export const getUserData = () => {
  const token = getIdToken();

  if (!token) return Promise.reject(new Error('No token found'));

  return makeRequest(GET_USER_DATA_URL, {
    method: 'POST',
    body: JSON.stringify({
      idToken: token,
    }),
  }).then((data) => data && data.users && data.users[0]);
};

export default getUserData;
