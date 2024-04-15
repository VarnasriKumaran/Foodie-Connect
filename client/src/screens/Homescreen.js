import React from 'react'
import Foods from '../components/Foods';
import data from '../data';
export default function homescreen() {
  return (
    <div>
      <div className='row'>
        {data.map(foods=>{
          return <div className="col-md-2">
          <Foods Foods={data}/>
          </div>  
})}
      </div>
    </div>
  )
}
