
import React from 'react';
import './ManageInventory.css'
import guava from '../../image/guava11.jpg'
import lichi from '../../image/lichi5.jpg'
import mango from '../../image/mango3.jpg'
import banana from '../../image/banana9.jpg'
 import orange from '../../image/orange6.jpg'
 import pineapple from '../../image/pinapple.jpg'
 import coconut from '../../image/coconut.jpg'
 import dragon from '../../image/dragen20.jpeg'
 import grepe from '../../image/grape.jpg'
 import berry from '../../image/berry.webp'
 import rambutan from '../../image/rambutan.jpg'
 import jackfruit from '../../image/jackfruit2.jpg'

const ManageInventory = () => {
    return (
        <div>
           <h2 className='inventory'>This is Manage Inventory</h2>
           <div>
             <div className="container product">
               <div className="row">
               <div className="col-lg-3 col-sm-2 curd">
                 <img src={guava} alt="" />  
                 <h6>Name :Guava </h6>
                 <p>Price :$30 per kilo</p>
                 <p>quntity :200</p>  
                 <p><small>Seller :Safi</small></p>

                </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={lichi} alt="" />  
                 <h6>Name : Lichi</h6>
                 <p>Price :$40 </p>
                 <p>quntity :400</p>  
                 <p><small>Seller :Kabir</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={mango} alt="" />  
                 <h6>Name : Mango</h6>
                 <p>Price :$60 per kilo</p>
                 <p>quntity :100</p>  
                 <p><small>Seller :Abdul</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={banana} alt="" />  
                 <h6>Name : Banana</h6>
                 <p>Price :$20</p>
                 <p>quntity :500</p>  
                 <p><small>Seller :Sarif</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={orange} alt="" />  
                 <h6>Name : Orange</h6>
                 <p>Price :$50</p>
                 <p>quntity :700</p>  
                 <p><small>Seller :Tuhin</small></p>
  
                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={pineapple} alt="" />  
                 <h6>Name : Pineapple</h6>
                 <p>Price :$30</p>
                 <p>quntity :200</p>  
                 <p><small>Seller :Sayed</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={coconut} alt="" />  
                 <h6>Name : Coconut</h6>
                 <p>Price :$20</p>
                 <p>quntity :100</p>  
                 <p><small>Seller :Siful</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={dragon} alt="" />  
                 <h6>Name : Dragan fruit</h6>
                 <p>Price :$60</p>
                 <p>quntity :700</p>  
                 <p><small>Seller :Rahim</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={grepe} alt="" />  
                 <h6>Name : Grape</h6>
                 <p>Price :$90</p>
                 <p>quntity :800</p>  
                 <p><small>Seller :Sumon</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={berry} alt="" />  
                 <h6>Name : Black Berry</h6>
                 <p>Price :$40</p>
                 <p>quntity :400</p>  
                 <p><small>Seller :Sofiq</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={rambutan} alt="" />  
                 <h6>Name : Rambutan</h6>
                 <p>Price :$50</p>
                 <p>quntity :600</p>  
                 <p><small>Seller :Karim</small></p>

                   </div>    
               <div className="col-md-3 col-sm-2 curd">
               <img src={jackfruit} alt="" />  
                 <h6>Name : Jack Fruit</h6>
                 <p>Price :$40</p>
                 <p>quntity :300</p>  
                 <p><small>Seller :Jalal</small></p>

                   </div>    
                </div>  
            </div>  
               
            </div> 
        </div>
    );
};

export default ManageInventory;