import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data));
    }, [])
    return (
        <div>
            <h2>wellcome to detail: {item.name}</h2>
            <div>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;