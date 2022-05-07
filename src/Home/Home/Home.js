
import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Items from './Items/Items';


const Home = () => {
    return (
        <div className='heading'>
        <h1>Wellcome To Fresh Fruits Warehouse</h1> 
        <Banner></Banner>
        <Items></Items>   
        </div>
    );
};

export default Home;