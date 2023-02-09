import { refreshTokens } from './refreshTokens';

export const checkIfUserIsLoggedIn = () =>
  refreshTokens()
    .then(() => true)
    .catch(() => false);

export default checkIfUserIsLoggedIn;
