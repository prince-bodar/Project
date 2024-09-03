import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineInboxStack } from "react-icons/hi2";
import Colum5 from '../../Colum5.json'
import FooterTwo from '../Components/footerTwo';


const Column5 = () => {
    return (
        <div>
            <div className=' max-h-16 py-16 px-9'>
                <h1 className='font-semibold text-sm'>Home / Shop</h1>
                <h1 className='text-gray-600'>Showing all 12 result</h1>
            </div>
            <div className='grid lmd:mx-20 vsm:mx-10 mx-5 lg:grid-cols-5 grid-cols-2 slg:grid-cols-3 mlg:grid-cols-4  '>
                {
                    Colum5.map((item) => {
                        return (
                            <div key={item.id}>

                                <div className='box  group w-32 vsm:w-40 lmd:w-52 text-center relative mx-1  py-4 '>
                                    <div className='relative' >
                                        <div className='pop absolute duration-500 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-6  group-hover:translate-x-2 '>
                                            <CiHeart className='size-7 sm:size-10 p-1 border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                            <FaRegEye className='size-7 sm:size-10 p-1  border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                        </div>
                                        <div className='relative'>
                                            <img src={item.img1} className="md:max-w-62 duration-100 ease-in-out hovertransition-all  hover:scale-100" alt="Imagem de perfil" />
                                            <img src={item.img2} className="md:max-w-62 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                                        </div>
                                        <div className='pop duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 translate-y-8 absolute left-2 bottom-0 vsm:left-5 lmd:left-12 md:left-12 top-[170px] vsm:top-[200px] lmd:top-[260px] md:top-68 lg:left-[45px] lg:top-[280px]'>
                                            <div className='flex items-center duration-500 bg-slate-50 rounded p-1 hover:bg-black hover:text-white'>
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
                        )
                    })
                }
            </div>
         <FooterTwo/>
        </div>
    )
}

export default Column5