import React, { useEffect } from 'react';
import trash from '../assets/trash.png';
import { useNavigate } from 'react-router-dom';





const CartItems = ({ cartitem, setCart }) => {
    const navigate = useNavigate()
    const handleIncrease = (id) => {
        setCart(cartitem.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    const handleDecrease = (id) => {
        const updateCart = cartitem.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updateCart);
    }

    const handleRemove = (id) => {
        const newCart = cartitem.filter((item) => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart))
    }

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCart(savedCart);
        }
    }, [setCart]);

    useEffect(() => {
        if (cartitem.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartitem));
        }
    }, [cartitem]);

    const items = cartitem.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalAmount = cartitem.reduce((amount,item)=>{
        return amount+= item.price * item.quantity
    },0)


   
    const handleCheckout = ()=>{
        navigate('/success')
        setCart([])
        localStorage.removeItem('cart')
    }
  

    return (
      
        <div className='mt-10'>
            <div>
                {cartitem.length > 0 ? (
                    <>
                        {cartitem.map((item) => (
                            <div key={item.id} className='flex mt-5 justify-between bg-white h-20 ml-4 mr-2 shadow-xl rounded-lg'>
                                <img src={item.img} alt="" className='w-12 h-10 ml-2 mt-2' />
                                <div className='ml-2 font-bold'>
                                    <h2 className='text-lg flex w-48'>{item.name}</h2>
                                    <h6 className='text-green-500'>${item.price}</h6>
                                </div>
                                <div>
                                    <button onClick={() => handleRemove(item.id)}>
                                        <img src={trash} alt="" className='w-5 h-5 ml-5 cursor-pointer' />
                                    </button>
                                    <div className='flex mt-3 -ml-10 text-lg'>
                                        <h6 className='border border-black border-double w-7 pl-2 bg-black text-white cursor-pointer hover:bg-green-950 rounded-md h-7 ' onClick={() => handleDecrease(item.id)}>-</h6>
                                        <h6 className='ml-2 mr-2'>{item.quantity}</h6>
                                        <h6 className='border border-black border-double mr-2 w-7 pl-2 bg-black text-white cursor-pointer hover:bg-green-900 rounded-md h-7 ' onClick={() => handleIncrease(item.id)}>+</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <h5 className='mt-8 ml-5 text-lg font-semibold'>Items: {items}</h5>
                            <h5 className='ml-5 text-lg font-semibold'>Total Amount:  ${totalAmount} </h5>
                            <button onClick={handleCheckout} className='mt-6 mb-4 flex w-64 ml-14 pl-20 pt-3 text-white font-bold text-xl hover:bg-green-300 bg-green-600 h-14 rounded-lg '>Checkout</button>
                        </div>
                    </>
                ) : (
                    <div className='flex items-center justify-center text-xl font-bold'>
                            Your Card is Empty
                    </div>
                )}
            </div>
        </div>

    );
};

export default CartItems;
