import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContainer from './NavbarContainer';

const SharedLayout = () => {
  return (
    <div>
      <NavbarContainer />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default SharedLayout;
