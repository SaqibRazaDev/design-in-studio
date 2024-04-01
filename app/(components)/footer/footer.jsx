import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo.svg'

function Footer() {
    return (
        <>


            <div
                className="con bg-cover py-8 flex flex-row"
                style={{ backgroundImage: "url('../../assets/footer/footer-bg.svg')" }}
            >

                <div className="w-2/5 m-0 p-0">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt='Logo'
                            width={111}
                            height={34}
                        />
                    </Link>

                </div>
                <div className="w-1/5 m-0 p-0 flex flex-col">
                    <Link href="/">About Us</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contact Us</Link>
                </div>
                <div className="w-1/5 m-0 p-0 flex flex-col">
                    <Link href="/">Integrations</Link>
                    <Link href="/">Careers</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms & Condition</Link>
                    <Link href="/">Cookie Policy</Link>
                </div>
                <div className="w-1/5 m-0 p-0 flex flex-col">
                    <Link href="/">+92 3278700 641</Link>
                    <Link href="/">admin@designinstudio.com</Link>
                    <Link href="/">Gulgusht Colony Multan, Pakistan</Link>
                </div>




            </div>


        </>
    )
}

export default Footer