'use client'

import React, { useState } from 'react';

export default function Form({ product }) {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/mgegjpkv', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setFormSubmitted(true);
                window.location.href = '/alert/success';
            } else {
                window.location.href = '/alert/error';
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-third-color">
            <div className="relative">
                <div className="background-image-service"></div>
                <div className="flex flex-col items-center justify-center relative z-10 sm:pt-20 pt-10">
                    <h1 className="text-40 text-white text-center text-with-shadow">INSURANCE PRODUCTS</h1>
                    <div className="flex text-30 text-white p-1">
                        <p className="p-1 text-with-shadow">{product} INSURANCE</p>
                    </div>
                </div>
            </div>
            <section title="Form auto quote" className="flex items-center justify-center p-5">
                <div className="flex flex-col items-start justify-center w-600">
                    <h1 className="text-30 primary-color second-custon-border w-max mb-5 pt-20">Personal Information</h1>
                    <form onSubmit={handleSubmit} className="p-1 w-full">
                        <label>First & Last Name <span className="danger-color">*</span></label>
                        <div className="pb-5">
                            <img src="/images/icon-person.svg" alt="icon person" className="absolute pt-1 p-2 border border-gray-400 rounded-sm" />
                            <input required name="name" type="name" className="pl-10 border border-gray-400 p-1 rounded-sm w-full" />
                        </div>
                        <label>Street Address<span className="danger-color">*</span></label>
                        <div className="pb-5">
                            <div className="absolute border pt-1 p-2 border-gray-400 rounded-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                                        fill="#5D5D5D"
                                    />
                                </svg>
                            </div>
                            <input required name="street" type="street" className="pl-10 border border-gray-400 p-1 rounded-sm w-full" />
                        </div>
                        <div className="flex w-full pb-5">
                            <div className="w-1/2 flex flex-col pr-5">
                                <label>City <span className="danger-color">*</span></label>
                                <input required name="city" type="city" className="border border-gray-400 p-1 rounded-sm" />
                            </div>
                            <div className="w-1/3 flex flex-col pr-5">
                                <label>State <span className="danger-color">*</span></label>
                                <input required name="state" type="state" className="border border-gray-400 p-1 rounded-sm w-full" />
                            </div>
                            <div className="w-1/4 flex flex-col">
                                <label>Zip Code <span className="danger-color">*</span></label>
                                <input required name="zip code" type="zip code" className="border border-gray-400 p-1 rounded-sm w-full" />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-1/2 flex flex-col pr-5">
                                <label>E-mail <span className="danger-color">*</span></label>
                                <div className="pb-5">
                                    <div className="absolute border pt-1 p-2 border-gray-400 rounded-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z"
                                                fill="#5D5D5D"
                                            />
                                        </svg>
                                    </div>
                                    <input required name="email" type="email" className="pl-10 border border-gray-400 p-1 rounded-sm w-full" />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label >Telephone <span className="danger-color">*</span></label>
                                <div className="pb-5">
                                    <div className="absolute border pt-1 p-2 border-gray-400 rounded-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                                                fill="#5D5D5D"
                                            />
                                        </svg>
                                    </div>
                                    <input required name="telephone" type="telephone" className="pl-10 border border-gray-400 p-1 rounded-sm w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col pb-5">
                            <label>Occupation</label>
                            <input name="occupation" type="occupation" className="border border-gray-400 p-1 rounded-sm" />
                        </div>
                        <div className="pb-5">
                            <input required type="checkbox" name="authorize" className="mr-5 p-1" />
                            <label>I authorize being contacted by Premiere Insurance experts for the purpose of providing the best service for the desired service. <span className="danger-color">*</span></label>
                        </div>
                        <input type="type" name="type" defaultValue={product} className="hidden" />
                        <hr class="border-gray-500 border-t-1" />
                        <button type="submit" className="btn-primary w-full mb-10 mt-5">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}