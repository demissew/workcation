import React, {useCallback, useEffect, useState} from 'react';
import Image from "next/image";

const Navbar = ({isOpen}) => {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false);

    function toggleDropdownMenu() {
        setIsDropDownOpen(!isDropdownOpen);
    }

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setIsDropDownOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (

        <nav
            className={'sm:flex sm:items-center flex-1 justify-end xl:justify-between ' + (isOpen ? 'block' : 'hidden')}>
            <div className="hidden xl:block xl:pl-4 xl:max-w-md xl:w-full">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        placeholder="Search by keywords"
                        className="w-full bg-gray-200 text-gray-500 rounded-lg pl-10 pr-4 py-2
                            border border-transparent focus:border-gray-200
                            focus:outline-none focus:bg-white focus:text-gray-900"
                    />
                </div>
            </div>
            <div className="sm:flex sm:items-center">
                <div className="px-2 py-3 border-b border-gray-800 sm:flex sm:border-b-0">
                    <a href="#"
                       className="block px-3 py-2 rounded hover:bg-gray-600 leading-tight font-semibold text-white
                       xl:hover:bg-gray-200
                       xl:text-gray-900 sm:text-sm">
                        List your property
                    </a>
                    <a href="#"
                       className="block px-3 py-2 rounded hover:bg-gray-600 xl:hover:bg-gray-200 leading-tight mt-1 sm:mt-0 font-semibold text-white xl:text-gray-900 sm:text-sm">
                        Trips
                    </a>
                    <a href="#"
                       className="block px-3 py-2 rounded hover:bg-gray-600 xl:hover:bg-gray-200 leading-tight mt-1 sm:mt-0 font-semibold text-white xl:text-gray-900 sm:text-sm">
                        Messages
                    </a>
                </div>
                <div className="px-5 py-3 sm:py-0 sm:pl-2">
                    <button type="button" className="flex items-center" onClick={() => toggleDropdownMenu()}>
                        <div className="relative h-10 w-10 sm:w-8 sm:h-8">
                            <Image
                                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                alt="Profile image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full border-2 border-gray-600"
                            />
                        </div>
                        <span className="ml-4 font-semibold text-gray-200 sm:hidden">Mary Anna</span>
                    </button>
                    <div className={isDropdownOpen ? 'sm:block' : 'sm:hidden'}>
                        <button onClick={() => toggleDropdownMenu()} type="button"
                                className="hidden sm:block cursor-default fixed inset-0 z-10 w-full h-full" />
                        <div
                            className="mt-5 z-10 sm:mt-3 sm:absolute sm:bg-white sm:rounded-lg sm:right-3 sm:shadow-xl sm:text-gray-900 sm:py-2 sm:w-48">
                            <a className="block sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500 text-gray-400 hover:text-white"
                               href="#">Account settings</a>
                            <a className="block sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500 mt-3 text-gray-400 hover:text-white"
                               href="#">Support</a>
                            <a className="block sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500 mt-3 text-gray-400 hover:text-white"
                               href="#">Sign out</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;
