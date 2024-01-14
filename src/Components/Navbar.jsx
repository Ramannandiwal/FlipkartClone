import React from 'react';

function Navbar() {
  return (
    <div className= ' w-lvw p-0 m-0'>
      
    <div className= '  bg-navcolor lg:bg-white flex items-center justify-around p-3'>
      <a className=' rotate-90 lg:hidden text-2xl ml-5' href="#">|||</a>
      <img className=' hidden lg:inline-block' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" />
      <img className=' lg:hidden w-24 h-10 ml-6 sm:inline-block' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
      <input  style={{backgroundColor:"#f1f2f4",border:"1px solid #f1f2f4 "}} className=' hidden lg:inline-block outline-none rounded-lg p-4 w-2/5 h-10' type="text" placeholder="Search for the products, Brands and More" />
      <a  className=' hover:bg-buttonhover py-2 px-6 rounded-lg font-bold text-xl' href="/#">Login</a>
      <a className=' hover:bg-buttonhover py-2 px-6 rounded-lg font-bold text-xl'  href="/#">Cart</a>
      <a className=' hidden lg:inline-block hover:bg-buttonhover py-2 px-6 rounded-lg font-bold text-xl'  href="/#">Become a Seller</a>
      <a className=" mr-4 rotate-90 font-bold text-xl" href="">...</a>
    </div>
  
 <div className=' bg-navcolor  flex items-center justify-center'>
 <input
  style={{ backgroundColor: "white", border: "1px solid #f1f2f4" }}
  className=' mb-3 sm:inline-block md:inline-block lg:hidden outline-none rounded-md  p-4 w-11/12 mx-3 my-2 h-10'
  type="text"
  placeholder="Search for the products, Brands and More"
/>
 </div>

    
  
   
    </div>
  );
}

export default Navbar;
