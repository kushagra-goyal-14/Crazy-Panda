import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='container'>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  </>
);
