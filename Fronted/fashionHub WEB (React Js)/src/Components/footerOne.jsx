import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import footerimg from '../assets/footer.jpg'
const FooterOne = () => {
  return (
    <div>
        <div className='text-center'>
                        <AiOutlineMail className='text-7xl  mx-auto' />
                        <h1 className='text-3xl font-normal my-2'>Subscribe newsletter</h1>
                        <h2 className='text-gray-500 text-sm my-2'>Subscribe Now and get more offers</h2>
                        <div>
                            <input
                              type='text'
                              className='w-72 my-14 border-none bg-slate-100 p-2'
                              placeholder='Your Email Address...'
                            />
                            <button className='p-2 text-white ml-8 px-4 rounded bg-[#000a12]'>
                                SubScribe Now
                            </button>
                        </div>
                </div>
                <div className='md:flex border-t-4 justify-between items-center'>
                    <img src={footerimg} className='my-2' />
                    <h1 className='text-gray-500 mr-4 my-2 ml-3 font-medium'>Design by :- <span className='font-bold'>Prince</span></h1>
                    <img src={footerimg} className='my-2' />
                </div>
    </div>
  )
}

export default FooterOne