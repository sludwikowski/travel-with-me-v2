import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PageLogin from '../pages/Login/PageLogin';

import { checkIfUserIsLoggedIn } from '../features/auth/checkIfUserIsLoggedIn';

import { useAuthUser } from '../contexts/UserContext';

import { handleAsyncAction } from '../handleAsyncAction';
import { PageCreateAccount } from '../pages/Register/PageCreateAccount';
import { PageRecoverPassword } from '../pages/Recover/PageRecoverPassword';

// import { ViewLoadersOverlay } from '../views/ViewLoadersOverlay';

function Routing() {
  const { isUserLoggedIn, isAdmin, getUserData } = useAuthUser();

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const userIsLoggedIn = await checkIfUserIsLoggedIn();
      if (userIsLoggedIn) {
        await getUserData();
      }
    }, 'Loading app...');
    // mount only
  }, [getUserData]);
  return (
    // <ViewLoadersOverlay>
    <>
      {isUserLoggedIn ? (
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      ) : null}
      {!isUserLoggedIn ? (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/create-account" element={<PageCreateAccount />} />
          <Route path="/recover-password" element={<PageRecoverPassword />} />
        </Routes>
      ) : null}
    </>
    // </ViewLoadersOverlay>
  );
}

export default Routing;
