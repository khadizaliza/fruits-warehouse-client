
import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Items from '../Items/Items';
import SpecialService from '../SpecialService/SpecialService';
import Brand from '../Brand/Brand';


const Home = () => {
    return (
        <div className='heading'>
        <h1>Wellcome To Fresh Fruits Warehouse</h1> 
        <Banner></Banner>
        <Items></Items> 
        <SpecialService></SpecialService> 
        <Brand></Brand> 
        </div>
    );
};

export default Home;