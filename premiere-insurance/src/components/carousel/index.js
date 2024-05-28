"use client"

import { useState, useEffect } from 'react';

const logos = [
    '/images/brand1.png',
    '/images/brand2.png',
    '/images/brand3.png',
    '/images/brand4.png',
    '/images/brand5.png',
    '/images/brand6.png',
    '/images/brand7.png',
    '/images/brand8.png',
    '/images/brand9.png',
];

export default function Carousel () {
    useEffect(() => {
        const track = document.querySelector('.carousel-track');
        const logosArray = Array.from(track.children);

        logosArray.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });
    }, []);

    return (
        <div className='bg-primary-color pt-5 pb-10 text-center'>
            <h1 className='text-30 font-regular text-white pb-5'>Our Insurance Companies</h1>
            <div className='flex items-center'>
                <div className="carousel overflow-hidden w-full">
                    <div className="carousel-track flex space-x-8 animate-scroll">
                        {logos.map((logo, index) => (
                            <img key={index} src={logo} className='sm:w-90 h-auto w-60' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

