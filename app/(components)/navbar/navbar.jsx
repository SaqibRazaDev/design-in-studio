import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg'

function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between">

                <div className="navbar flex items-center gap-8">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt='Logo'
                                width={111}
                                height={34}
                            />
                        </Link>
                    </div>
                    <div className="nav flex gap-8 items-center">
                        <Link href="/assets" className='text-lg font-medium'>Assets</Link>
                        <Link href="/ai-tools" className='text-lg font-medium'>Ai Tools</Link>
                        <Link href="/photos" className='text-lg font-medium'>Photos</Link>
                        <Link href="/videos" className='text-lg font-medium'>Videos</Link>
                        <Link href="/hire" className='text-lg font-medium'>Hire Us</Link>
                    </div>

                </div>
                <div className="login flex gap-8 items-center">
                    <Link href="/" className='text-lg text-[#FAD007] font-medium'>Create a Portfolio</Link>
                    <Link href="/" className='text-lg font-medium'>Log in</Link>
                    <Link href="/" className='text-lg text-black font-medium bg-white px-3 py-1 border rounded-sm'>Sign up</Link>
                </div>

            </div>



        </>
    )
}

export default Navbar