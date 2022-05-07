import React from 'react';
import brand from '../../image/brands.jpg';
import './Brand.css'

const Brand = () => {
    return (
        <div className='brand'>
            <h2>We Are Brand</h2>
            <img src={brand} alt="" />
            <p>Like us, our growers have a strong belief in Integrated Pest Management and organic growing methods, a firm commitment to certified residue-free production, a deep understanding of sustainability and a keen interest in innovation, guarantees the very best fruits. So we are your trusted brand </p>
        </div>
    );
};

export default Brand;