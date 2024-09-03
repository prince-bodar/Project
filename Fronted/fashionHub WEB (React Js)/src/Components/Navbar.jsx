import React from 'react'
import { FiShoppingBag } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Navigate } from 'react-router-dom';


    const Navbar = () => {

    
    return (
        <div className=''>
            <h1 className='hidden md:block font-mono text-white text-center font-semibold bg-[#586946] p-2 text-md tracking-wide'>Free delivery on orders over $1499. Don’t miss discount.</h1>
            <div className='flex justify-between items-center p-5 border-2 '>
                <p className='md:hidden  text-2xl'><IoMenu /></p>
                <img className='w-32 sm:w-42' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2022/12/emart-011.webp" alt="" />
                <div>
                    <nav>
                        <ul className="hidden md:flex   space-x-10 ">
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/" >Demo</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/product" >Product</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/Shop" >Shop</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' >Blog</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' >Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <CiSearch className='hidden sm:block  size-6  mx-2' />
                    <Link to="/Signin"><FiUser className='size-6  mx-2' /> </Link>
                    <CiHeart className='hidden md:block  size-6  mx-2' />
                    <Link to='/Cart'> <FiShoppingBag className='size-6 mx-2' /></Link> 
                </div>
            </div>
        </div>

    )
}

export default Navbar