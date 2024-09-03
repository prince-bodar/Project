import React from 'react'
import CardViewHome from '../Components/CardViewHome'
import SwiperHome from '../Components/SwiperHome'
import { BsTruck } from "react-icons/bs";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { Link } from 'react-router-dom';
import FooterOne from '../Components/footerOne';

const Homepage = () => {
    return (
        <div>
            <div className="bg-pink-50 pb-20  border-2 flex  flex-wrap justify-around items-center ">
                <div className="md:w-1/2 mb-10">
                    <h1 className="font-semibold text-lg mt-36">New Women Fashion</h1>
                    <h1 className="text-5xl  md:text-8xl max-w-5 mt-7 text-gray-800 ">
                        Summer essential stock
                    </h1>
                    <button className="border-2 hover:-translate-y-3 hover:duration-700 border-neutral-700 py-3 px-7 text-bold hover:bg-black hover:text-white mt-7">
                       <Link to="/Shop" >Shop Now</Link>
                    </button>
                </div>
                <div>
                    <img
                        className="max-h-screen hover:-translate-x-2 hover:duration-300"
                        src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2022/12/banner-img.webp"
                        alt=""
                    />
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-5xl text-gray-800 text-center mt-16 font-semibold tracking-wide'>Shop categories</h1>
                <p className='text-center text-lg mt-5 text-gray-700'>On other hand, we denounce with righteous indignation beguiled</p>
            </div>
            <SwiperHome />
            <CardViewHome />
            <div className='mb-14'>
                <div className='box grid grid-cols-1 mx-9 sm:grid-cols-2 lg:grid-cols-4 my-7 mt-20 border-2 border-slate-300 p-8 justify-center '>
                    <div className='flex flex-wrap justify-center items-center my-5'>
                        <BsTruck className='size-11  hover:-translate-x-2 hover:duration-200' />
                        <div className='space-x-5'>
                            <div className='font-semibold text-lg ml-5'>Free Shipping</div>
                            <div className='text-gray-500 mx-14'>On order over $1499</div>
                        </div>
                    </div>
                    <div className='flex  flex-wrap justify-center items-center my-5 '>
                        <PiCurrencyDollarLight className='size-11 hover:-translate-x-2 hover:duration-200' />
                        <div className='space-x-5'>
                            <div className='font-semibold text-lg ml-5'>Quick Payment</div>
                            <div className='text-gray-500 mx-14'>Online Quick Payment</div>
                        </div>
                    </div>
                    <div className='flex  flex-wrap justify-center items-center my-5'>
                        <FiShoppingCart className='size-11  hover:-translate-x-2 hover:duration-200' />
                        <div className='space-x-5'>
                            <div className='font-semibold text-lg ml-5'>Easy Return</div>
                            <div className='text-gray-500 mx-14'>Return within 24 hours</div>
                        </div>
                    </div>
                    <div className='flex  flex-wrap justify-center items-center my-5'>
                        <CiHeadphones className='size-11  hover:-translate-x-2 hover:duration-200' />
                        <div className='space-x-5'>
                            <div className='font-semibold text-lg ml-5'>24/7 Support</div>
                            <div className='text-gray-500 mx-14'>Customer Online Support</div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne/>
        </div>
    )
}

export default Homepage