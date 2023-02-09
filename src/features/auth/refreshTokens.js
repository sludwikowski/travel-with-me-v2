import { makeRequest } from './makeRequest';
import { logOut } from './logOut';
import { getRefreshToken, setIdToken, setRefreshToken } from './token';
import { VITE_MY_VAR_KEY } from './const';

const REFRESH_TOKEN_URL = `https://securetoken.googleapis.com/v1/token?key=${VITE_MY_VAR_KEY}`;

export const refreshTokens = () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) return Promise.reject(new Error('No refresh token found'));

  return makeRequest(REFRESH_TOKEN_URL, {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
    .then((data) => {
      setIdToken(data.id_token);
      setRefreshToken(data.refresh_token);

      return data;
    })
    .catch((error) =>
      logOut().finally(() => {
        throw error;
      }),
    );
};
