import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import footerimg from '../assets/footer.jpg'

const FooterTwo = () => {
  return (
    <div>
        <div>
                <div className='bg-slate-100 w-full  grid slg:grid-cols-4 lmd:grid-cols-2 p-10'>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>Quick Link</h1>
                        <p className='my-2'>  <a href="#">About</a>  </p>
                        <p className='my-2'>  <a href="#">Product</a>  </p>
                        <p className='my-2'>  <a href="#">Responsibility</a>  </p>
                        <p className='my-2'>  <a href="#">Career</a>  </p>
                        <p className='my-2'>  <a href="#">Press</a>  </p>
                        <p className='my-2'>  <a href="#">Image Bank</a>  </p>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>Customer Service</h1>
                        <p className='my-2'>  <a href="#">My Account</a>          </p>
                        <p className='my-2'>  <a href="#">Checkout Page</a>       </p>
                        <p className='my-2'>  <a href="#">Help Center</a>       </p>
                        <p className='my-2'>  <a href="#">Terms & Condition</a>   </p>
                        <p className='my-2'>  <a href="#">Deliveries & Refunds</a> </p>
                        <p className='my-2'>  <a href="#">Cart Page</a>           </p>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>More</h1>
                        <p className='my-2'>  <a href="#">Gift Card</a>        </p>
                        <p className='my-2'>  <a href="#">Lookbook </a>        </p>
                        <p className='my-2'>  <a href="#">Rewards Program</a>  </p>
                        <p className='my-2'>  <a href="#">Wedding Dress</a>    </p>
                        <p className='my-2'>  <a href="#">Host A Party</a>     </p>
                        <p className='my-2'>  <a href="#">Extended Sizing</a>  </p>

                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black mb-4'>Don't Miss Any Update</h1>
                        <p>Molestie vitae massa felis, aliquam lectus at.
                            Ultricies et, quis sit fermentum aliquam et.</p>
                        <div className='flex mt-5'>
                            <input
                                type='text'
                                className='w-full border-4 bg-slate-100 p-2'
                                placeholder='Your Email'
                            />
                            <button className='p-4  text-white bg-[#000a12]'>
                                <FaArrowRightLong />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='md:flex border-t-4 justify-between items-center'>
                    <img src={footerimg} className='my-2' />
                    <h1 className='text-gray-500 mr-4 my-2 ml-3 font-medium'>Design by :- <span className='font-bold'>Prince</span></h1>
                </div>
            </div>
    </div>
  )
}

export default FooterTwo
