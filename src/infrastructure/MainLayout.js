import React from 'react';
import Header from '../pages/Navbar'; // Adjust the import path as necessary
import Footer from '../pages/BottomBar'; // Adjust the import path as necessary

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
