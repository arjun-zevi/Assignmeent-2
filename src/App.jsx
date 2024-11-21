import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import CakeDetails from './components/CakeDetails';
import './styles.css';


const App = () => (
  <div>
    <Header />
    <Homepage />
    <AboutUs />
    <CakeDetails />
    <Cart />
    <Footer />
  </div>
);

export default App;
