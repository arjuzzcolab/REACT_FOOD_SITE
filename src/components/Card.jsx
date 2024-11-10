import React, { useState } from 'react'; // No need for 'setData'
import FoodData from '../data/FoodData'; 
import star from '../assets/star.png'; 
import CartItems from './CartItems'; 
import cart from '../assets/online-shopping.png'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Card = () => {
  const [show, setShow] = useState(false);
  const [cartItem, setCartItem] = useState([]); // No need for 'data'

  const handleClick = (item) => {
    setCartItem((prev) => {
      const currentItemIndex = prev.findIndex((cartitem) => cartitem.id === item.id);
      if (currentItemIndex !== -1) {
        return prev.map((cartitem, index) =>
          index === currentItemIndex ? { ...cartitem, quantity: cartitem.quantity + 1 } : cartitem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    toast.success(`${item.name} added to cart`, { position: "top-center", autoClose: 3000 });
  };

  return (
    <div className="mt-10 ml-10">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-72 gap-y-10 lg:gap-6">
        {FoodData.map((item) => (
          <div key={item.id} className="bg-white p-5 w-72 lg:w-80 rounded-md">
            <img
              src={item.img}
              alt=""
              className="w-[290px] object-cover h-40 hover:scale-105 transform transition-all"
            />
            <div className="flex justify-between mt-5">
              <h2 className="text-xl w-52 font-bold">{item.name}</h2>
              <h6 className="font-bold">${item.price}</h6>
            </div>
            <p className="h-12 overflow-hidden text-ellipsis line-clamp-2 mt-2">{item.desc}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src={star} alt="rating" className="w-5 h-5 mr-2" />
                <h6 className="font-bold">{item.rating}</h6>
              </div>
              <button
                className="ml-auto px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
                onClick={() => handleClick({ ...item })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {show ? (
        <div className="right-0 top-0 fixed bg-white w-[350px] h-full scrollable">
          <div className="flex justify-between mt-5">
            <h2 className="ml-4 text-xl font-bold">My Order</h2>
            <button onClick={() => setShow(!show)}>
              <h5 className="border hover:border-none hover:outline-none hover:text-black border-black border-double mr-2 w-7 pl-0 bg-black text-white cursor-pointer hover:bg-yellow-500 rounded-md h-7 ">
                x
              </h5>
            </button>
          </div>
          <CartItems cartitem={cartItem} setCart={setCartItem} />
        </div>
      ) : (
        <button onClick={() => setShow(!show)} className="bg-white rounded-lg mr-1 animate-dance fixed right-0 top-[900px]">
          <img src={cart} className="w-12 p-2 h-12" alt="" />
        </button>
      )}

      <ToastContainer />
    </div>
  );
};

export default Card;
