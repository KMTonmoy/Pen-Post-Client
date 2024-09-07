import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => pathname === path;

    return (
        <div className='border-y-2 border-gray-200 rounded-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
            <div className='flex justify-between py-4 px-5 md:px-7 items-center'>
                <Link to='/'>
                    <h1 className='text-[28px] sm:text-[32px] md:text-[36px] font-extrabold hover:text-[#1cd100] duration-500'>
                        Pen & Post
                    </h1>
                </Link>

                {/* Desktop Links */}
                <div className='hidden md:flex gap-[56px] text-[#030712b3]'>
                    <CustomLink to='/' isActive={isActive('/')}>Home</CustomLink>
                    <CustomLink to='/blogs' isActive={isActive('/blogs')}>Blogs</CustomLink>
                    <CustomLink to='/about' isActive={isActive('/about')}>About</CustomLink>
                    <CustomLink to='/contact' isActive={isActive('/contact')}>Contact</CustomLink>
                </div>

                {/* Login Button */}
                <NavLink to={'login'}>
                    <button className='hidden md:flex items-center py-2 md:py-4 px-6 md:px-[30px] gap-1 bg-[#26d1001a] hover:bg-[#26d10052] duration-300 hover:text-[#278619] border-2 border-[#1dd10066] rounded-[12px] text-[#1cd100] font-bold'>
                        Login
                    </button>
                </NavLink>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className='md:hidden text-3xl text-[#1cd100]'>
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='relative bg-white w-3/4 max-w-xs h-full p-6'>
                    <button onClick={toggleMenu} className='absolute top-4 right-4 text-3xl text-[#1cd100]'>
                        <HiX />
                    </button>
                    <div className='flex flex-col gap-6 mt-10 text-lg'>
                        <CustomLink to='/' isActive={isActive('/')}>Home</CustomLink>
                        <CustomLink to='/blogs' isActive={isActive('/blogs')}>Blogs</CustomLink>
                        <CustomLink to='/about' isActive={isActive('/about')}>About</CustomLink>
                        <CustomLink to='/contact' isActive={isActive('/contact')}>Contact</CustomLink>
                        <Link to={'login'}>
                            <button className='text-center flex py-2 px-4 gap-1 bg-[#26d1001a] hover:bg-[#26d10052] justify-center duration-300 hover:text-[#278619] border-2 border-[#1dd10066] rounded-[12px] text-[#1cd100] font-bold mt-6'>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Custom Link Component for Active Link Styling
const CustomLink = ({ to, children, isActive }) => (
    <Link to={to} className={`relative group font-semibold ${isActive ? 'text-[#1cd100]' : 'text-[#030712b3]'}`}>
        <span className='group-hover:text-[#1cd100] transition-colors duration-300'>
            {children}
        </span>
        <span className={`absolute left-0 bottom-[-2px] h-[2px] transition-all duration-300 ${isActive ? 'w-full bg-[#1cd100]' : 'w-0 group-hover:w-full bg-[#1cd100]'}`}></span>
    </Link>
);

export default Navbar;
