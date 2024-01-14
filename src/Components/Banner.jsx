import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6cd4f58ce14ba48d.jpg?q=20" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/909a32737b6d03e0.jpg?q=20" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fba99b97b0581fb3.jpeg?q=20" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/eb64347ca9e81b7e.jpg?q=20" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3198ad782dcf5f2c.jpg?q=20" onDragStart={handleDragStart} role="presentation" />,

];

const Banner = () => {
  const isSmallScreen = window.innerWidth <= 600; // Adjust the threshold as needed

  return (
    <div className='m-5'>
      <AliceCarousel
        mouseTracking
        items={items.map((item, index) => (
          <div className='lg:w-full md:w-full h-36 md:h-3/5 lg:h-4/5' key={index}>
            {React.cloneElement(item, { style: { width: '100%', height: '100%' } })}
          </div>
        ))}
        disableButtonsControls
        disableDotsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
      />
    </div>
  );
};

export default Banner;
