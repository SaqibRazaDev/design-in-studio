'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg'
import { IoMenu, IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [aitoolsOpen, setAitoolsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const closeDropdown = () => {
        setDropdownOpen(false);
    }

    const aitoolsDrop = () => {
        setAitoolsOpen(!aitoolsOpen);
    };
    const closeAitoolsDrop = () => {
        setAitoolsOpen(false);
    }





    return (
        <>
            <div className=" flex flex-row justify-between">

                <div className="navbar flex items-center gap-8">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt='Logo'
                                className='h-auto w-12 sm:w-16 md:w-20 lg:w-28'
                            // width={111}
                            // height={34}
                            />
                        </Link>
                    </div>

                    <div className='hidden lg:block'>
                        <div className="nav flex gap-8 items-center">
                            <div className="Assets">
                                <div className="accets flex items-center gap-2">
                                    <Link href="/assets" className='nav-link'>Assets</Link>
                                    {dropdownOpen ? <FaAngleUp onClick={closeDropdown} /> : <FaAngleDown onClick={toggleDropdown} />}
                                </div>
                                {dropdownOpen && (
                                    <div className="dropdownMenu flex flex-col absolute top-20">
                                        <Link href="/" className='nav-link' onClick={closeDropdown}>Vectors</Link>
                                        <Link href="/" className='nav-link' onClick={closeDropdown}>PSD</Link>
                                        <Link href="/" className='nav-link' onClick={closeDropdown}>Templates</Link>
                                    </div>
                                )}
                            </div>
                            <div className="ai-tools">
                                <div className="accets flex items-center gap-2">
                                    <Link href="/ai-tools" className='nav-link'>AI Tools</Link>
                                    {aitoolsOpen ? <FaAngleUp onClick={closeAitoolsDrop} /> : <FaAngleDown onClick={aitoolsDrop} />}
                                </div>
                                {aitoolsOpen && (
                                    <div className="dropdownMenu flex flex-col absolute top-20">
                                        <Link href="/ai-tools" className='nav-link' onClick={closeAitoolsDrop}>AI Image Enhancer</Link>
                                        <Link href="/" className='nav-link' onClick={closeAitoolsDrop}>AI Image Generator</Link>
                                        <Link href="/" className='nav-link' onClick={closeAitoolsDrop}>AI Writer</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/ai-tools" className='nav-link'>Ai Tools</Link>
                            <Link href="/photos" className='nav-link'>Photos</Link>
                            <Link href="/videos" className='nav-link'>Videos</Link>
                            <Link href="/hire" className='nav-link'>Hire Us</Link>
                        </div>
                    </div>


                </div>
                <div className="hidden lg:block">
                    <div className="login flex gap-8 items-center ">
                        <Link href="/" className='text-lg text-[#FAD007] font-medium'>Create a Portfolio</Link>
                        <Link href="/" className='text-lg font-medium'>Log in</Link>
                        <Link href="/" className='text-lg text-black font-medium bg-white px-3 py-1 border rounded-sm'>Sign up</Link>
                    </div>
                </div>
                <div className="menu lg:hidden">
                    {isOpen ? (
                        <IoClose onClick={closeMenu} style={{ fontSize: '25px' }} />
                    ) : (
                        <IoMenu onClick={toggleMenu} style={{ fontSize: '25px' }} />
                    )}
                </div>


                <div
                    className={`lg:hidden fixed top-14 sm:top-16 right-0 w-full md:w-96 h-full bg-[#01094D] z-10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="px-6 flex flex-col gap-3 items-start mt-10">
                        <Link href="/assets" className="nav-link" onClick={toggleMenu}>
                            Assets
                        </Link>
                        <Link href="/ai-tools" className="nav-link" onClick={toggleMenu}>
                            Ai Tools
                        </Link>
                        <Link href="/photos" className="nav-link" onClick={toggleMenu}>
                            Photos
                        </Link>
                        <Link href="/videos" className="nav-link" onClick={toggleMenu}>
                            Videos
                        </Link>
                        <Link href="/hire" className="nav-link" onClick={toggleMenu}>
                            Hire Us
                        </Link>
                    </div>
                </div>



            </div>



        </>
    )
}

export default Navbar