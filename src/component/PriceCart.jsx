import React, { useContext, useState } from 'react';
import "../App.css"
import { Message } from '../App'

function PriceCart() {
    const { data } = useContext(Message);

    const [quantities, setQuantities] = useState({}); 

    const handleQuantityChange = (productId, quantity) => {
        setQuantities({
            [productId]: quantity,
        });
    };

    return (
        <div>
            {data.products.map(val => (
                <div key={val.id} className='all'>
                    <div className='insidebox'>
                            <img src={val.thumbnail} alt={val.title} className='photo' />
                     <div className='info'>   <h2 className='title'>{val.title}</h2>
                        <p >{val.description}</p></div>
                    </div>
                    <div className='right'>
                    <select className='selection'
                        onChange={(e) => handleQuantityChange(val.id, parseInt(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                  
                        <h4 id='pi'>${val.price}</h4>
                        <p className='remove'>Remove</p>
                    
                    </div>
                    <hr />
                    <p className='left'>SUBTOTAL:</p> 
                    <span className='rightside'><h4>$ {val.price * (quantities[val.id]) || val.price}</h4></span>
                    <p className='left'>SHIPPING:</p> 
                    <span className='rightside'><h4>FREE</h4></span>
                    <hr />
                    <p className='left'>TOTAL:</p> 
                    <span className='rightside'><h4>$ {val.price * (quantities[val.id])||val.price}</h4></span>
                </div>
     
            ))}
        </div>
    );
}

export default PriceCart;
