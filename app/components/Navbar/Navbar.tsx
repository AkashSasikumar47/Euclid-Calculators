import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white font-bold text-xl">Logo</div>
                </div>
                <div className="hidden md:flex md:space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                        About
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Calculators
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Contact
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Login
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none focus:text-white"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800 mt-4">
                    <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
                        About
                    </a>
                    <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
                        Calculators
                    </a>
                    <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
                        Contact
                    </a>
                    <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
                        Login
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;