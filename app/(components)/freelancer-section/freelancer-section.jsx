import React from 'react'
import ServiceCard from './service-card'
import img1 from '../../../public/assets/freelance-section/01.svg'
import img2 from '../../../public/assets/freelance-section/02.svg'
import img3 from '../../../public/assets/freelance-section/03.svg'

function FreelancerSection() {


    return (

        <>

            <div className="con py-6">

                <div className="text text-center">
                    <p className="heading-lg">Hire Freelance <span className='text-[#FAD007]'> Designers.</span></p>
                    <p className="heading-xs font-normal">Find the Perfect Freelancer for Your Next Project.</p>
                </div>

                <div className="box my-12 flex flex-col gap-4 lg:flex-row lg:justify-between">
                    <ServiceCard
                    url="/"
                    img={img1}
                    discription="Browse, Search, and Filter Over 1 Million Qualified Creators Available Now."
                    />
                    <ServiceCard
                    url="/"
                    img={img2}
                    discription="Start Conversations, Share Files, and Join Video Calls With Candidates."
                    />
                    <ServiceCard
                    url="/"
                    img={img3}
                    discription="Pay Seamlessly and Securely With a Debit or Credit Card on Design In Studio."
                    />

                </div>



            </div>

        </>

    )
}

export default FreelancerSection
