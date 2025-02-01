import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoHeartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="shadow-lg" >
   <nav >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Shop Sense</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href='/Tshirts' className="mr-5 hover:text-gray-900">T-Shirts</a>
      <a href='/Mugs' className="mr-5 hover:text-gray-900">Mugs</a>
      <a  href='/Hoodies' className="mr-5 hover:text-gray-900">Hoodies</a>
      {/* <a className="mr-5 hover:text-gray-900">Sweaters</a> */}
    </nav>
    <div className="inline-flex items-center cursor-pointer  space-x-2 border-0 py-1 px-3 text-2xl  rounded mt-4 md:mt-0">

  <IoHeartOutline  />
  
    <a href='/ShoppingCart'> <AiOutlineShoppingCart/></a>
  
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
