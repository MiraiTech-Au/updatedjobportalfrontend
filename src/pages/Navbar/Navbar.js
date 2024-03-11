import React from 'react';
// Import necessary icons from react-icons
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-10 bg-blue-700 text-white px-3">
            <div className="mx-auto flex justify-between items-center py-3">
                <div>
                  <p className='text-lg font-bold pl-0 md:pl-6'>JobSeekUser</p>
                </div>
                <div className="hidden md:flex space-x-4 ml-10">
                    <a href="/find-job" className="hover:bg-blue-700 px-3 py-2 rounded-md">Find a job</a>
                    <a href="/explore-companies" className="hover:bg-blue-700 px-3 py-2 rounded-md">Explore companies</a>
                    <a href="/compare-salaries" className="hover:bg-blue-700 px-3 py-2 rounded-md">Compare salaries</a>
                    <a href="/resume-homepage" className="hover:bg-blue-700 px-3 py-2 rounded-md">Create My Resume</a>
                </div>
                <div className="flex items-center space-x-4 mr-2 md:mr-16 ml-4">
                    <button className="hover:bg-blue-700 p-2 rounded-md">
                        <span className="sr-only">Search</span>
                        <FaSearch />
                    </button>
                    <button className="hover:bg-blue-700 p-2 rounded-md">
                        <span className="sr-only">Notifications</span>
                        <FaBell />
                    </button>
                    <Link to="/">
                        <button className="hover:bg-blue-700 p-2 rounded-md">
                            <span className="sr-only">Profile</span>
                            <FaUser />
                        </button>
                    </Link>
                    {/* Hamburger menu for mobile view */}
                    <button className="md:hidden hover:bg-blue-700 p-2 rounded-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-600 m-2 sha">
                    <a href="/find-job" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Find a job</a>
                    <a href="/explore-companies" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Explore companies</a>
                    <a href="/compare-salaries" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Compare salaries</a>
                    <a href="/resume-homepage" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Create My Resume</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
