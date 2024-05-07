import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
    return (
        <>


            <div
                className="con bg-cover py-8 flex flex-col w-full"
                style={{ backgroundImage: "url('../../assets/footer/footer-bg.svg')" }}
            >

                <div className="flex flex-wrap">

                    <div className="w-full md:w-1/2 lg:w-2/5 m- p-0">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt='Logo'
                                width={111}
                                height={34}
                            />
                        </Link>

                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">About Us</Link>
                        <Link href="/">Features</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Contact Us</Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">Integrations</Link>
                        <Link href="/">Careers</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Condition</Link>
                        <Link href="/">Cookie Policy</Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">+92 3278700 641</Link>
                        <Link href="/">admin@designinstudio.com</Link>
                        <Link href="/">Gulgusht Colony Multan, Pakistan</Link>
                    </div>

                </div>

                <div className="links mt-8 flex flex-col md:flex-row items-center justify-between">

                    <div className="social flex flex-row items-center gap-4">
                        <p className="text-base">
                            Follow Us
                        </p>
                        <Link href="https://youtube.com/@designinnstudio4928?si=5tb1gV99ZP8g4JCM" target='blank'>
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.instagram.com/design_inn_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
                            <FaInstagram />
                        </Link>
                        <Link href="https://youtube.com/@designinnstudio4928?si=5tb1gV99ZP8g4JCM" target='blank'>
                            <TbBrandYoutube />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100093811385396&mibextid=ZbWKwL" target='blank'>
                            <PiFacebookLogoBold />
                        </Link>


                    </div>
                    <div className="copyright">
                        <p className="text-base">Copyright © 2024 All Rights Reserved</p>
                    </div>

                </div>

            </div>









        </>
    )
}

export default Footer