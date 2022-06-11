
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
   const {name, img, price, _id, seller, quentity} = item;
   console.log(item) 
   const navigate = useNavigate();
   const navigatToItemDetail = id =>{
       navigate(`/login`);

   }
    return (
        <div className='item'>
            <h6>{_id}</h6>
            <img src={img} alt="" />
          <h4>Name: {name}</h4>
           <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p><small>quentity:{quentity}</small></p>
            <button onClick={() => navigatToItemDetail(_id)} className='btn btn-primary'>Update Item</button>
        </div>
    );
};


export default Item;