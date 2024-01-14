import React from 'react'

function HomsectionCart({src,heading}) {
  return (
    <div className=' p-2 flex flex-col  items-center align-baseline '>
        <img  src={src} alt="" />
        <h2 className=' font-bold'>{heading}</h2>
    </div>
  )
}

export default HomsectionCart