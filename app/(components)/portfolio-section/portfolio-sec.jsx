import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import user from '../../../public/assets/portfolio-section/01.svg'
import blueBg from '../../../public/assets/portfolio-section/blue-bg.svg'
import blueBg2 from '../../../public/assets/portfolio-section/2.svg'

function PortfolioSection() {
  return (
    <>


      <div className="con">

        <div className="my-8 flex flex-col gap-6 items-center lg:flex-row lg:justify-between">

          <div className="text flex flex-col gap-4 lg:gap-10 lg:max-w-xl">
            <p className="heading-lg">Join Design In Studio <span className='text-[#FAD007]'> Portfolio Community.</span></p>
            <p className="heading-xs font-normal">If You are New Designer & Creator, We Provided You Place to Build Your Attractive Portfolio.</p>
            <div className="btn hidden lg:block">
              <Link href="/" className='mt-12 text-lg text-black font-medium bg-white px-8 py-3 border rounded-md'>Creat Now</Link>
            </div>
          </div>

          <div className="my-8 blue-bg bg-cover bg-center flex flex-col items-center">

            <Image
              src={user}
              alt=''
              className='w-auto h-40 md:h-56 lg:h-[350px]'
            />
            <div className="btn lg:hidden mt-12">
              <Link href="/" className='text-lg text-black font-medium bg-white px-8 py-3 border rounded-md'>Creat Now</Link>
            </div>

          </div>


        </div>

      </div>

    </>
  )
}

export default PortfolioSection
