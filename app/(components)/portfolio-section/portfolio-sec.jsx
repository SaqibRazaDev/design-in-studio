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

          <div className="text flex flex-col gap-10">
            <p className="heading-lg">Join Design In Studio <span className='text-[#FAD007]'> Portfolio Community.</span></p>
            <p className="heading-xs font-normal">If You are New Designer & Creator, We Provided You Place to Build Your Attractive Portfolio.</p>
            <div className="btn hidden lg:block">
              <Link href="/" className='mt-12 text-lg text-black font-medium bg-white px-8 py-3 border rounded-md'>Creat Now</Link>
            </div>
          </div>

          <div className="blue-bg bg-cover bg-center">

            <Image
              src={user}
              alt=''
              className=' lg:w-[492px] lg:h-[350px]'
            />
            <div className="btn lg:hidden ">
              <Link href="/" className='mt-12 text-lg text-black font-medium bg-white px-8 py-3 border rounded-md'>Creat Now</Link>
            </div>

          </div>


        </div>

      </div>

    </>
  )
}

export default PortfolioSection
