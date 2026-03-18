import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#ffffffff]">
      <Navbar />
      <main className=""> {/* padding to avoid navbar overlap */}
        <Outlet /> {/* All routed pages will render here */}
      </main>
    </div>
  );
};

export default Layout;