import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Me</h2>
                        <p className="text-sm text-gray-400">
                            Welcome to Pen & Post, your go-to platform for insightful blog posts on various topics. Explore our latest articles and stay informed with quality content.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white duration-200">Home</a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-gray-400 hover:text-white duration-200">Blogs</a>
                            </li>

                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white duration-200">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white duration-200">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Pen & Post. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
