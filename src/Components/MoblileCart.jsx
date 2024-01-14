import React from 'react'
import data from '../assets/Mobiles'

function MoblileCart() {
  return (
     data.map((item)=>{
       return(
        <div className=' flex  flex-col justify-center items-center'>
        <img className=' w-1/3' src={item.img} alt="" />
        <h3>{item.name}</h3>
         <p>{item.price}</p>
    </div>
       )
     })
   
  )
}

export default MoblileCart