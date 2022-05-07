import React from 'react';
import deliver from '../../image/deliver-pic.jpg';
import './SpecialService.css'

const SpecialService = () => {
    return (
        <div className='deliver'>
            <h2>Our Special Service</h2>
            <img src={deliver} alt="" />
            <p>We are convinced that a high level of social responsibility is in the best interest of all stakeholders in the production chain; from growers to consumers and we also believe that these high standards deserve our moral and financial support.</p>
        </div>
    );
};

export default SpecialService;