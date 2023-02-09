const PREFIX = 'nextjs-tours';
const ID_TOKEN_KEY = `${PREFIX}-idToken`;
const REFRESH_TOKEN_KEY = `${PREFIX}-refreshToken`;

export const getIdToken = () => localStorage.getItem(ID_TOKEN_KEY);

export const setIdToken = (newToken) => {
  localStorage.setItem(ID_TOKEN_KEY, newToken);
};

export const removeIdToken = () => localStorage.removeItem(ID_TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const setRefreshToken = (newToken) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, newToken);
};

export const removeRefreshToken = () =>
  localStorage.removeItem(REFRESH_TOKEN_KEY);
