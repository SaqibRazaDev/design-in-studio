import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CategoryCard(props) {
    return (
        <>
            <div className="flex flex-col mx-2">
                <Link href={props.url}>
                    <div className="ctg-card relative top-5 overflow-hidden w-56 h-36 rounded-xl border-2">
                        <Image src={props.bg} layout="fill" objectFit="cover" alt="Category Background" />
                    </div>
                </Link>
                <p className="text-base font-medium text-center my-2 mt-7">{props.title}</p>
            </div>
        </>
    )
}

export default CategoryCard
