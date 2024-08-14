import React from 'react';
import Navbar from '../Navbar/Navbar'; // Importación corregida
import Footer from '../Footer/Footer'; // Importación corregida

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;