"use client"

import { useEffect } from "react";
import Link from 'next/link';

export default function Header() {

    useEffect(() => {
        const linksContainer = document.getElementById('menu');
        if (!linksContainer) return;

        const links = linksContainer.querySelectorAll('a');

        const handleClick = (event) => {
            links.forEach(link => link.classList.remove('action-click'));
            event.currentTarget.classList.add('action-click');
        };

        links.forEach(link => link.addEventListener('click', handleClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleClick));
        };
    }, []);
    return (
        <div className="bg-white">
            <div className="sm:text-15 text-10 bg-primary-color flex justify-around text-white sm p-2">
                <Link href="/services/auto">AUTO QUOTE</Link>
                <p className="border-r" ></p>
                <Link href="/services/home">HOMEOWNER QUOTE</Link>
                <p className="border-r" ></p>
                <Link href="/services/business">BUSSINES QUOTE</Link>
            </div>
            <div className="gradient-right pt-5 p-5 sm:pl-40 flex items-center">
                <div className="sm:pr-10 pr-5 pt-5">
                    <img src="/images/Logo_SemFundo.png" className="sm:w-full sm:h-auto w-10 h-auto" />
                </div>
                <div>
                    <h1 className="sm:text-50 text-25 text-white">PREMIERE INSURANCE</h1>
                    <h2 className="text-white pb-2">Serving the entire state of Massachusetts </h2>
                    <Link href="/services" className="btn-primary lusitana-regular">REQUEST</Link>
                </div>
            </div>
            <div id="menu" className="w-full sm:text-20 text-sm flex justify-end sm:pr-40 custon-border">
                <Link className="p-2 primary-color" href="/">HOME</Link>
                <Link className="p-2 primary-color" href="/services">INSURANCE</Link>
                <Link className="p-2 primary-color" href="/about">ABOUT</Link>
                <Link className="p-2 primary-color" href="/contact">CONTACT</Link>
            </div>
        </div>
    );
}