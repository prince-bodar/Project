import React from "react";
import FooterOne from "../Components/footerOne";
import { removeToCart, emptyCart } from "../Redux/cartRedux/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const [Count, setCount] = useState({});

  const increment = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setCount((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[id] > 1) {
        newCount[id] -= 1;
      }
      return newCount;
    });
  };

  return (
    <div>
      <div className="h-100% lg:flex justify-evenly items-start text-gray-500 p-8  bg-gradient-to-r from-cyan-50 to-blue-100">
        <div className="w-full lg:w-7/12 p-5 bg-white shadow-lg mb-8 lg:mb-0">
          <div className="w-full">
            <div>
              <div className="hidden md:grid grid-cols-6  text-center">
                <p className="p-4"></p>
                <p></p>
                <p>Products</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
            <div className="">
              {data.map((item) => (
                <div className="border-b grid   grid-cols-1 md:grid-cols-6 md:items-center md:text-center "
                  key={item.id}>
                  <div className="p-4 border-b md:border-none">
                    <button onClick={() => dispatch(removeToCart(item.id))}>
                      <IoIosCloseCircleOutline className="text-xl" />
                    </button>
                  </div>
                  <div className="p-4  border-b md:border-none">
                    <div className="flex items-center">
                      <img
                        src={item.img1}
                        className="w-20 h-20 object-cover mr-4"
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div className="p-4  border-b md:border-none">
                    <p className="font-semibold text-gray-600">{item.name}</p>
                  </div>
                  <div className="p-4  border-b md:border-none">
                    <span>${item.price}</span>
                  </div>
                  <div className="p-4  border-b md:border-none">
                    <div className="flex items-center px-2 w-28 md:w-auto justify-evenly border-2 rounded">
                      <button
                        onClick={() => decrement(item.id)}
                        className="text-3xl"
                      >
                        -
                      </button>
                      <span className="px-4">{Count[item.id] || 1}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span>${item.price * (Count[item.id] || 1)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div class="flex flex-wrap  items-center mt-5 mx-auto">
              <input type="text" placeholder="Coupon code" class="border w-full sm:w-44 text-black  px-4 my-2 py-2 focus:outline-none" />
              <button class="w-full sm:w-44 bg-black text-white  hover:text-black hover:bg-white  border-black border-2 duration-500 px-4 py-2">Apply Coupon</button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-80 p-4 text-sm  bg-white shadow-lg">
          <h2 className="text-xl font-semibold border-b p-2 mb-4">
            Cart Totals
          </h2>
          <div className="mb-2 flex justify-between border-b p-1">
            <span>Subtotal</span>
            <span>
              $
              {data.reduce(
                (total, item) => total + item.price * (Count[item.id] || 1),
                0
              )}
            </span>
          </div>
          <div className="mb-2">
            <h1>Shipping</h1>
            <div className="flex justify-between mt-2 ">
              <span>Flat rate:</span>
              <span>$10.00</span>
            </div>
            <h2 className="mt-1">Shipping to <span className="font-medium">CA</span></h2>
            <h2 className="border-b pb-2 my-2">Change address</h2>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Total</span>
            <span>
              ${data.reduce((total, item) => total + item.price * (Count[item.id] || 1), 0) + 10}
            </span>
          </div>
          <button className="w-full py-2 mt-4 bg-black text-white font-semibold hover:bg-white hover:-translate-y-2 duration-500  border-2 border-black hover:text-black ">
            Proceed To Checkout
          </button>
        </div>
      </div>
     <div className="mt-20">  
       <FooterOne/>
     </div>
    </div>
  );
};

export default Cart;
