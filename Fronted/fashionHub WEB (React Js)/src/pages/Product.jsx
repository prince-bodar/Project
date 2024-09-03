import React, { useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";  
import { HiOutlineInboxStack } from "react-icons/hi2";
import FooterTwo from '../Components/footerTwo';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../Redux/productRedux/productAction';

const Product = () => {
    const dispatch = useDispatch();
    const shopData = useSelector(state => state.product);
    console.log("shopData", shopData);
    
    // Safely flatten shopData
    const shop = Array.isArray(shopData) ? shopData.flat(10) : [];

    useEffect(() => {
        dispatch(ProductList());
    }, [dispatch]);

    return (
        <div>
            <div>
                <h1 className='text-gray-700 text-2xl md:text-4xl mt-14 bg-pink-50 h-[60px] p-3 md:h-[130px] flex items-center px-3 md:px-20'>Product Style Two</h1>
            </div>
            <div className='grid mt-24 px-3 justify-evenly lg:grid-cols-4 grid-cols-2 slg:grid-cols-3'>
                {
                    shop.length > 0 ? shop.map(item => (
                        <div key={item.id}>
                            <div className='box group w-32 vsm:w-40 lmd:w-52 text-center relative mx-auto md:mx-7 my-4'>
                                <div className='relative'>
                                    <div className='pop absolute duration-500 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-6 group-hover:translate-x-2'>
                                        <CiHeart className='size-7 sm:size-10 p-1 border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                        <FaRegEye className='size-7 sm:size-10 p-1 border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                    </div>
                                    <img className='md:max-w-72' src={item.img1} alt="" />
                                    <div className='pop duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 translate-y-8 absolute left-2 bottom-0 vsm:left-5 lmd:left-12 md:left-20 top-[170px] vsm:top-[200px] lmd:top-[270px] md:top-96'>
                                        <div onClick={() => dispatch(addToCart(item))} className='flex items-center duration-500 bg-slate-50 rounded p-1 hover:bg-black hover:text-white'>
                                            <HiOutlineInboxStack className='mr-2' />
                                            <h2 className='text-sm md:text-base'>select option</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='md:text-xl text:sm font-medium text-gray-800 my-3'>{item.name}</h1>
                                    <h3 className='sm:text-lg text-gray-800 mb-5'>${item.price}</h3>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p>No products available.</p>
                    )
                }
            </div>
            <FooterTwo />
        </div>
    );
}

export default Product;
