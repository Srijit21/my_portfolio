// src/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'; // Import it here

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <ScrollToTop /> {/* Place it inside layout */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;