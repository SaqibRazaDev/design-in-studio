import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function ServiceCard(props) {


  return (

    <>

      <Link href={props.url}>

        <div className="flex items-center justify-between gap-3 px-4 h-28 w-auto mx-auto max-w-96 bg-gradient-to-br from-white/50 via-white/10 to-white/0 border-gray-400 border-2 hover:border-gray-200 rounded-xl">

          <div className="img">
            <Image
              src={props.img}
              alt=''
              className='w-20 h-20'
            />
          </div>
          <div className="text">
            <p className="font-light text-base leading-tight">
              {props.discription}
            </p>

          </div>


        </div>


      </Link>

    </>

  )
}

export default ServiceCard
