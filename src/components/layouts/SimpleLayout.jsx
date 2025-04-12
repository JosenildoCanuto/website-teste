import React from 'react';
import Header from './Header';
import Footer from './FooterBlock';

export const SimpleLayoutType = {
  SIMPLE: 'simple',
  LANDING: 'landing',
  PRODUCTS: 'products',
  SERVICIOS: 'servicios'
};

export default function SimpleLayout({ layout = SimpleLayoutType.SIMPLE, children }) {
  const isFull = [SimpleLayoutType.LANDING, SimpleLayoutType.PRODUCTS, SimpleLayoutType.SERVICIOS].includes(layout);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer isFull={isFull} />
    </>
  );
}