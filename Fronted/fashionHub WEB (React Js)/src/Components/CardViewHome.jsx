import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useEffect } from 'react';
import { addToCart } from '../Redux/cartRedux/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import { ProductList } from '../Redux/productRedux/productAction'

function CardView() {
    
    const dispatch = useDispatch()
    const shopData = useSelector(state => state.product)
    console.log("shopData", shopData);
    const data = shopData.flat(10)
  
    useEffect(() => {
      dispatch(ProductList())
    }, [])

    return (
        <div className='font-serif'>
            <div>
                <h1 className='sm:text-5xl vsm:4xl text-2xl font-semibold tracking-wide text-gray-800 mt-10 ml-4'>Best selling items</h1>
            </div>
            <div className='mt-10 grid lg:grid-cols-4 grid-cols-2 slg:grid-cols-3 justify-center '>
                {data.map((item) => (
                    <div key={item.id}>
                    <div  className='box group w-32 vsm:w-40 lmd:w-52 relative mx-auto md:mx-7 my-4'>
                        <div className="relative">
                            <img src={item.img1} className="md:max-w-72 duration-100 ease-in-out hovertransition-all  hover:scale-100" alt="Imagem de perfil" />
                            <img src={item.img2} className="md:max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            <div className='flex opacity-0 group-hover:translate-y-0 group-hover:duration-200 group-hover:opacity-100 absolute left-2 vsm:left-5 lmd:left-8 md:left-20 top-[110px] vsm:top-[150px] lmd:top-[200px] md:top-80'>
                                <span></span><CiHeart className='size-8 lmd:size-10 mx-1 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                <FaRegEye className='size-8 mx-1 lmd:size-10 border-2 rounded-full p-2  bg-white hover:bg-black hover:text-white mt-3' />
                                <LuShoppingBag onClick={() => dispatch(addToCart(item))} className='size-8 lmd:size-10 mx-1 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h1 className='md:text-2xl font-medium text-gray-800  '>{item.name}</h1>
                            <h3 className='vsm:text-md text-gray-800 mt-2'>{item.Showprice}</h3>
                        </div>
                    </div>
                    </div>
                ))};
            </div>
        </div>


    )
}

export default CardView
