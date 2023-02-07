import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function MasterLayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default MasterLayout