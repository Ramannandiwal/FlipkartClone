import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from '../assets/Mobiles';

const handleDragStart = (e) => e.preventDefault();


const MySwipper = () => {

  return (
    <div className=' bg-white m-4  flex items-center justify-center p-3'>
      <div className='m-5  w-11/12 flex  p-3'>
      <AliceCarousel
        mouseTracking
        items={data.map((item, index) => (
            <div className=' mx-2 p-2 shadow-lg flex  flex-col justify-center items-center'>
            <img className= ' m-2 transition-all ease-in-out  hover:scale-105 border h-52 w-2/3' src={item.img} alt="" />
            <h3 className= ' transition-all ease-in-out  hover:scale-105 '>{item.name}</h3>
             <p className= ' transition-all ease-in-out  hover:scale-105 '>{item.price}</p>
        </div>
        ))}
        
        disableDotsControls
        disableButtonsControls
      
        autoPlayInterval={2000}
        responsive={{
            0: {
                items: 1,
            },
            1024: {
                items:5.5,
                itemsFit: 'contain',
            }
        }}
      />
     
    </div>
     
    </div>
  );
};

export default MySwipper;
