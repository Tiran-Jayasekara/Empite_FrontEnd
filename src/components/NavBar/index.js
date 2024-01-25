"use client"
import React, { useState } from 'react'
import { navOptions } from '../utils';
import CommenModal from '../CommenModal';
import { useRouter } from 'next/navigation';


// This NavItem is used for Mobile Responsive Navbar
function NavItem({ isModalView = false, router, setShowNavModal }) {
    return (
        <>
            <div
                className={`item-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`}
                id="nav-items">
                <ul
                    className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isModalView ? "" : "border border-gray-100"}`}
                >
                    {navOptions.map((item) => (
                        <li
                            className="cursor-pointer block py-2 pl-3 pr-4 text-black font-muli font-normal text-sm rounded md:p-0 hover:text-blue-500"
                            key={item.id}
                            onClick={() => {
                                router.push(item.path);
                                setShowNavModal(false);
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                    <li>
                        <button className="block mt-8 p-2 w-32 text-white rounded bg-black" onClick={() => {
                            router.push('/Lets');
                        }}>
                            Let's Talk
                        </button>

                    </li>
                </ul>
            </div>
        </>
    );
}


const NavBar = () => {
    const [showNavModal, setShowNavModal] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className="bg-white border-gray-200 w-full mb-8">
                <div className="flex w-full items-center justify-between mx-auto">
                    <img src="assests/companyLogo/companyLogo.png" className="lg:h-12 lg:w-auto md:h-10 md:w-auto w-12 lg:ml-36 md:ml-20 ml-10 mt-5" alt="Empite Logo" />

                    {/* This Botton is Used for Mobile Nav Bar */}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="justify-center p-2 text-sm mt-5 mr-4 text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => {
                            setShowNavModal((prevState) => !prevState);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>


                    <div className="hidden w-full md:block md:w-auto  lg:mr-36 md:mr-20">
                        <ul className="font-muli font-normal text-sm flex flex-col md:flex-row md:mt-0 md:border-0 md:bg-white text-black">

                            {/* Iterate Nav navOptions */}
                            {navOptions.map((item, index) => (
                                <li
                                    className="block mt-11 lg:mx-6 mx-2 text-black cursor-pointer "
                                    key={index}
                                    onClick={() => {
                                        router.push(item.path);
                                        setShowNavModal(false);
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                            <li>
                                <button className="block mt-8 py-2 px-5 ml-6  text-white rounded bg-black" onClick={() => {
                                    router.push('/Lets');
                                }}>
                                    Let's Talk
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* This Common Modal is used for Mobile Responsive Navbar */}
            <CommenModal
                mainContent={
                    <NavItem
                        isModalView={true}
                        router={router}
                        setShowNavModal={setShowNavModal}
                    />
                }
                show={showNavModal}
                setShow={setShowNavModal}
            />
        </>
    )
}

export default NavBar