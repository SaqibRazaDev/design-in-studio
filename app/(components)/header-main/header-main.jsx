import React from 'react'
import Image from 'next/image'
import shape from '../../../public/assets/header/header-shape-1.svg'
import shape2 from '../../../public/assets/header/header-shape-2.svg'
import Navbar from '../navbar/navbar';
import SearchBar from '../seearch-bar/search-bar';

function HeaderMain() {
    return (
        <>

            <div className="con bg-cover py-8 " style={{ backgroundImage: "url('../../assets/header/header-bg.svg')" }}>

                <Navbar />

                <div className="h mt-24 flex flex-col items-center gap-4">
                    <div className="head flex flex-row items-center gap-3">
                        <h1 className="heading-hg">
                            DESIGN
                        </h1>
                        <Image
                            alt='Shape 1'
                            src={shape}
                            width={161}
                            height={66}
                        />
                        <h1 className="heading-hg outline-2">
                            YOUR VISION
                        </h1>
                    </div>
                    <div className="head2 flex flex-row items-center gap-3">
                        <h1 className="heading-hg">
                            SHAPING YOUR FUTURE
                        </h1>
                        <Image
                            alt='Shape 2'
                            src={shape2}
                            width={240}
                            height={66}
                        />
                    </div>
                </div>
                <div className="text-center mt-6">
                    Turn your ideas into outstanding designs with high quality vectors, photos, videos, mockups and many more.
                </div>
                <div className="flex items-center">
                    <SearchBar />
                </div>

            </div>


        </>
    )
}

export default HeaderMain