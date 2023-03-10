import { makeRequest } from './makeRequest';
import { getIdToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const UPDATE_USER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${VITE_MY_VAR_KEY}`;

export const updateUser = (displayName, photoUrl) => {
  const token = getIdToken();

  if (!token) return Promise.reject(new Error('No token found'));

  const deleteAttribute =
    displayName && photoUrl
      ? undefined
      : [
          ...(displayName === null ? ['DISPLAY_NAME'] : []),
          ...(photoUrl === null ? ['PHOTO_URL'] : []),
        ];

  return makeRequest(UPDATE_USER_URL, {
    method: 'POST',
    body: JSON.stringify({
      idToken: token,
      ...(!displayName ? {} : { displayName }),
      ...(!photoUrl ? {} : { photoUrl }),
      deleteAttribute,
      returnSecureToken: true,
    }),
  });
};

export default updateUser;
