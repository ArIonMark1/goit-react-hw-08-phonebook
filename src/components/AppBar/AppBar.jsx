import './AppBar.scss';
import React from 'react';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { HandleUserData } from 'hooks/handleUserData';

const AppBar = () => {
  const { data: userData, isLoading } = HandleUserData();

  if (isLoading) {
    return (
      <>
        <Navigation />
      </>
    );
  }
  return (
    <>
      <Navigation />
      {userData ? <UserMenu userName={userData.name} /> : <AuthNav />}
    </>
  );
};

export default AppBar;
