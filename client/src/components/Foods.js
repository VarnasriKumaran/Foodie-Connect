import React,{useState} from 'react';
import data from'../data';
import './Foods.css';
function Foods () {
    const [quantity,setquantity]=useState(1)
    const [varients,setvarients]=useState('small')
  return (
    <div>
    <div style={{margin :'100px'}} className='="shadow-lg p-3 mb-5 bg-white rounded'>
    <div className='Foods-container' >
      {data.map(item => (
        <div key={item.name} className='Foods-item'>
         <h1>{item.name}</h1>
         <img src={item.image} alt={item.name} />
         <div className='Food-details'>
         <p>Variants</p>
         <select className='form-control' value={varients} onChange={(e)=>{setvarients(e.target.value)}}>
           {item.varients.map(varients => (
             <option key={varients} value={varients}>{varients}</option>
           ))}
         </select>
         <p>Quantity</p>
         <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
           {[...Array(10).keys()].map((_, i) => (
             <option key={i + 1} value={i + 1}>{i + 1}</option>
           ))}
         </select> 
         <h4 className='Food-item'>Price:{item.prices[0][varients]*quantity}</h4>
         <button className="btn">Add to cart</button>
         </div>
        </div>))}
    </div>
    </div>
    </div>
  );
}

export default Foods;
