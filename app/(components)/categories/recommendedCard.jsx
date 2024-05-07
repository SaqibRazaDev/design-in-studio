import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nature from '../../../public/assets/category-section/nature-videos.svg';

function RecommendedCard(props) {
  return (
    <>
      <div className="card relative w-32 h-20 md:w-[400px] md:h-64 bg-slate-200">
        <Link href={props.url}>
          <div className="relative overflow-hidden">
            <Image src={props.bg} />
          </div>
        </Link>
        <div className="title flex items-center absolute bottom-2 left-2 w-28 h-6 bg-black bg-opacity-50 rounded p-2 text-center">
          <p className="text-xs text-white text-center">{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default RecommendedCard;
