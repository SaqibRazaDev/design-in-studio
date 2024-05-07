import React from 'react'
import RecommendedCard from './recommendedCard'
import nature from '../../../public/assets/category-section/nature-videos.svg'

function RecommendedCtgr() {
    return (
        <>


            <RecommendedCard
                url="/"
                bg={nature}
                title="Nature Videos"

            />
            <RecommendedCard
                url="/"
                bg={nature}
                title=""
            />


        </>
    )
}

export default RecommendedCtgr