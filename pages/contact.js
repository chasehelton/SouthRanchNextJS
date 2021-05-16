import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Contact() {

    function mailForm() {
        alert("Hello")
    }

    return (
        <div id="contact">
            <div className="bg-blue-300 mt-12">
                <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Contact</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Want to work with us?
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
                            Email <em>rick@southranchllc.com</em> or give us a call at (919) 422-2287 if you want to get in touch.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="bg-blue-300">
                <div className="px-10">
                <div className="p-5 mx-auto md:mt-0 md:col-span-2">
                    <form onSubmit="return mailForm()">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className="mt-1 bg-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    autoComplete="family-name"
                                    className="mt-1 bg-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    name="email_address"
                                    id="email_address"
                                    autoComplete="email"
                                    className="mt-1 bg-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                    Phone number (Format: 123-456-7890)
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    autoComplete="phone-number"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    required
                                    className="mt-1 bg-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div> */}
        </div>
    )
}
