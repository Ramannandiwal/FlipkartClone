import React from 'react'
import footerimage from '../assets/FOOTER/Footer'

function FooterAbove() {
  return (
    <div  className=' flex m-3'>
      {
        footerimage.map((data)=>{
            return (
                <div className=' m-1' id={data.id}>
                    <img src={data.image} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default FooterAbove