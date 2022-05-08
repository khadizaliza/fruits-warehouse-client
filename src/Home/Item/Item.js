
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
   const {name, img, price, _id, whereFrom} = item; 
   const navigate = useNavigate();
   const navigatToItemDetail = id =>{
       navigate(`/item/${id}`);

   }
    return (
        <div className='item'>
            <h6>{_id}</h6>
            <img src={img} alt="" />
          <h4>Name: {name}</h4>
           <p>Price: {price}</p>
            <p>{whereFrom}</p>
            <button onClick={() => navigatToItemDetail(_id)} className='btn btn-primary'>Add Item</button>
        </div>
    );
};

export default Item;