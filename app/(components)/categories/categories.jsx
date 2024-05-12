import React from 'react'
import CategoryCard from './category-card'
import Vector from '../../../public/assets/category-section/vector.svg'
import Photos from '../../../public/assets/category-section/photos.svg'
import Videos from '../../../public/assets/category-section/videos.svg'
import PSD from '../../../public/assets/category-section/psd.svg'
import Templates from '../../../public/assets/category-section/templates.svg'

function Categories() {
    return (
        <div className="con grid grid-rows-2 grid-flow-col md:grid-rows-1 items-start gap-x-4 overflow-x-auto">

            <CategoryCard
                url="/photos"
                bg={Photos}
                title="Photos"
            />
            <CategoryCard
                url="/videos"
                bg={Videos}
                title="Videos"
            />
                        <CategoryCard
                url="/"
                bg={Vector}
                title="Vectors"
            />
            <CategoryCard
                url="/"
                bg={PSD}
                title="PSD"
            />
            <CategoryCard
                url="/"
                bg={Photos}
                title="Illustrations"
            />
            <CategoryCard
                url="/"
                bg={Templates}
                title="Templates"
            />


        </div>
    )
}

export default Categories
