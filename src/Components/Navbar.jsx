import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { pathname } = location;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => pathname === path;

    const { user } = useContext(AuthContext);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='relative border-b-2 border-gray-200 shadow-lg'>
            <div className='flex justify-between py-4 px-5 lg:px-8 items-center'>
                {/* Logo */}
                <Link to='/'>
                    <h1 className='text-2xl lg:text-3xl font-extrabold hover:text-[#1cd100] duration-500'>
                        Pen & Post
                    </h1>
                </Link>

                {/* Desktop Links */}
                <div className='hidden lg:flex gap-10 items-center'>
                    <CustomLink to='/' isActive={isActive('/')}>Home</CustomLink>
                    <CustomLink to='/blogs' isActive={isActive('/blogs')}>Blogs</CustomLink>
                    <CustomLink to='/about' isActive={isActive('/about')}>About</CustomLink>
                    <CustomLink to='/contact' isActive={isActive('/contact')}>Contact</CustomLink>
                </div>
 
                {/* Mobile Menu Toggle */}
                <div className='flex gap-4'>

                    {
                        user ? (
                            <>
                                <img
                                    src={'https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png'}
                                    alt="User Avatar"
                                    className="w-14 h-14 rounded-full cursor-pointer"
                                    onClick={toggleDropdown}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-[80px] p-4 top-16 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                        <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Home
                                        </Link>
                                        <Link to="/donate" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Donate
                                        </Link>
                                        <Link to="/ourDonators" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Our Donators
                                        </Link>
                                        <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            About
                                        </Link>
                                        <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Dashboard
                                        </Link>
                                        <Link to="/logout" className="block w-full text-center px-4 py-2 text-white bg-red-500 rounded-lg">
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to={'/login'}>
                                <button className='text-center px-4 py-2 mt-6 bg-green-500 text-white rounded-lg hover:bg-green-600'>
                                    Login
                                </button>
                            </Link>
                        )
                    }



                    <button onClick={toggleMenu} className='lg:hidden text-3xl text-green-500'>
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>


                </div>



            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='lg:hidden fixed inset-0 bg-gray-900 bg-opacity-80 z-50'>
                    <div className='absolute top-0 right-0 w-3/4 bg-white h-full p-6'>
                        <button onClick={toggleMenu} className='absolute top-4 right-4 text-3xl text-green-500'>
                            <HiX />
                        </button>
                        <div className='flex flex-col gap-6 mt-10 text-lg'>
                            <CustomLink to='/' isActive={isActive('/')}>Home</CustomLink>
                            <CustomLink to='/blogs' isActive={isActive('/blogs')}>Blogs</CustomLink>
                            <CustomLink to='/about' isActive={isActive('/about')}>About</CustomLink>
                            <CustomLink to='/contact' isActive={isActive('/contact')}>Contact</CustomLink>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Custom Link Component for Active Link Styling
const CustomLink = ({ to, children, isActive }) => (
    <Link to={to} className={`relative group font-semibold ${isActive ? 'text-green-500' : 'text-gray-700'}`}>
        <span className='group-hover:text-green-500 transition-colors duration-300'>
            {children}
        </span>
        <span className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${isActive ? 'w-full bg-green-500' : 'w-0 group-hover:w-full bg-green-500'}`}></span>
    </Link>
);

export default Navbar;
