import React from 'react';
import HeaderUser from '../header';
import FooterUser from '../footer';



const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <HeaderUser />
      {children}
      <FooterUser />
    </div> 
  );
};

export default UserLayout;
