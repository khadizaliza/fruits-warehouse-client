
import React from 'react';
import './Item.css'

const Item = ({item}) => {
   const {name, img, price, id, whereFrom} = item; 
    return (
        <div className='item'>
            <h6>{id}</h6>
            <img src={img} alt="" />
          <h4>Name: {name}</h4>
           <p>Price: {price}</p>
            <p>{whereFrom}</p>
            <button>Add Item</button>
        </div>
    );
};

export default Item;