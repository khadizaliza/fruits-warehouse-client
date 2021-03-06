
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);
     
    useEffect( ()=>{
     fetch('https://shielded-bastion-03757.herokuapp.com/items') 
     .then(res => res.json())
     .then(data => {
        setItems(data)
        console.log(data)
     });  
    }, [])
    return (
        <div id='items' className='container'>
            <h1 className='item-title'>Items For You</h1>
            <div className="items-container">
            {
                items.map(item => <Item
                key={item._id}
                item={item}
                >
                </Item>)
            }
            </div>
        </div>
    );
};

export default Items;
