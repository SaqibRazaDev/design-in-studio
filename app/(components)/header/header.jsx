import React from 'react';
import Navbar from '../navbar/navbar';

function Header(props) {
    return (
        <div className="con bg-cover py-8" style={{ backgroundImage: `url(${props.bg.src})` }}>
            <Navbar />

            <div className="text-center my-12">
                <h1 className="heading-xl my-4">
                    {props.title}
                </h1>
                <p className="tag-line">
                    {props.tagline}
                </p>
            </div>
        </div>
    );
}

export default Header;
