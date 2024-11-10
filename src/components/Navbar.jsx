import React, { useState } from 'react';
import image from '../assets/hamburger.png';
import search from '../assets/magnifying-glass.png';
import FoodData from '../data/FoodData';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [input, setInput] = useState('');
 
  const navigate = useNavigate(); 

  const handleClick = () => {
   
    const match = FoodData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
   
    
    navigate('/search', { state: { matchedItems: match } });
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 h-24 w-[700px] lg:w-full bg-black/70">
        <img
          src={image}
          alt="logo"
          className="mt-8 h-8 w-14 md:h-10 md:w-20 object-contain"
        />
        <a href="/" className='flex justify-center items-center'><h2 className=" md:text-5xl text-3xl font-bold text-white ">
          Foodie
        </h2></a>
      </div>
      <div className="flex justify-end -mt-20 md:mr-20 -mr-64">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="rounded-full md:w-80 lg:w-80 md:h-14 lg:h-14 p-3 md:p-4 lg:p-5 bg-black border-none outline-none text-white text-lg md:text-xl"
        />
        
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-16 h-14 bg-blue-500 rounded-e-3xl -ml-14 hover:bg-white"
        >
          <img src={search} alt="search" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
