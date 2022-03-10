import React from 'react';
import Cart from '../../Cart/Cart';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const HomeMain = () => {
    return (
        <div>
        {/* <Cart/> */}
            <Navbar/>
            <Header/>           
            <Footer/>
        </div>
    );
};

export default HomeMain;