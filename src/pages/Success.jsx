import React from 'react';
import Navbar from '../components/Navbar';

const Success = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen  ">
            <h1 className="text-xl md:text-2xl font-bold text-center px-4 ml-36 ">
                Payment Successful. Your order is coming...
            </h1>
        </div>
    </div>
  );
}

export default Success;
