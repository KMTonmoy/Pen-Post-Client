import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { pathname } = location;
    const { user, logOut } = useContext(AuthContext);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => pathname === path;

    const email = user?.email;

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (email) {
                    const response = await fetch(`http://localhost:8000/users/${email}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    const data = await response.json();
                    setUserData(data);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [email]);

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            setError('Failed to log out. Please try again.');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className='relative border-b-2 border-gray-200 shadow-lg'
        >
            <div className='flex justify-between py-4 px-5 lg:px-8 items-center'>
                <Link to='/'>
                    <motion.h1
                        whileHover={{ scale: 1.1, color: '#1cd100' }}
                        className='text-2xl lg:text-3xl font-extrabold text-gray-800'
                    >
                        Pen & Post
                    </motion.h1>
                </Link>

                <div className='hidden lg:flex gap-10 items-center'>
                    <CustomLink to='/' isActive={isActive('/')}>Home</CustomLink>
                    <CustomLink to='/blogs' isActive={isActive('/blogs')}>Blogs</CustomLink>
                    <CustomLink to='/about' isActive={isActive('/about')}>About</CustomLink>
                    <CustomLink to='/contact' isActive={isActive('/contact')}>Contact</CustomLink>
                </div>

                <div className='flex gap-4'>
                    {user ? (
                        <>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={userData.photo || ''}
                                alt="User Avatar"
                                className="w-14 h-14 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                            />
                            {dropdownOpen && (
                                <motion.div
                                    ref={dropdownRef}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute right-[80px] p-4 top-16 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                                >
                                    <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>
                                    <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</Link>
                                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                                    <button
                                        onClick={handleLogout}
                                        className='w-full text-center px-[20px] py-[10px] bg-green-500 text-white rounded-lg hover:bg-green-600 mt-3'
                                    >
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <Link to='/login'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className='text-center px-[20px] py-[10px] bg-green-500 text-white rounded-lg hover:bg-green-600'
                            >
                                Login
                            </motion.button>
                        </Link>
                    )}

                    <button onClick={toggleMenu} className='lg:hidden text-3xl text-green-500'>
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className='lg:hidden fixed inset-0 bg-gray-900 bg-opacity-80 z-50'
                >
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
                </motion.div>
            )}

            {error && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md">
                    {error}
                </div>
            )}
        </motion.div>
    );
};

const CustomLink = ({ to, children, isActive }) => (
    <Link to={to} className={`relative group font-semibold ${isActive ? 'text-green-500' : 'text-gray-700'}`}>
        <motion.span whileHover={{ scale: 1.1 }} className='group-hover:text-green-500 transition-colors duration-300'>
            {children}
        </motion.span>
        <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
        />
    </Link>
);

export default Navbar;
