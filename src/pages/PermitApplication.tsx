import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Avatar from '../assets/avatar.jpg'
import SubmitButton from '../components/SubmitButton';


export default function PermitApplication() {

    const [openTab, setOpenTab] = useState(1);

    const [useCredentials, setUseCredentials] = useState(true)

    const [stepOneComplete] = useState(false)

    return (
        <div className="bg-white">
            <div className="bg-yellow-300 sm:px-32 px-5 sm:py-10 py-5">
            <p className="text-lg font-bold text-gray-700">
                Start application
            </p>
            <p className="text-gray-700">
                Please follow through the application guide. It takes 5 - 7 minutes to finish. Click <a className="text-blue-400 font-bold underline" href="{{ route('permits-guide') }}">here</a> to view licence guide and scope of permit application.
            </p>
        </div>

        <div className="border sm:m-10 m-5 sm:p-10 p-5 rounded-sm">
            <ul className="sm:flex flex-row mx-auto">
                <Link to="#tab1" className={(openTab === 1
                    ? "border  rounded-sm p-5 w-full flex border-green-400"
                    : "border  rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link3"       
                    >
                    {
                stepOneComplete ? <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg> :
                    <div className={(openTab === 1 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        1
                    </div> }
                    <div className="ml-2">
                        <p className={(openTab === 1 ? "font-semibold text-green-500" : "font-semibold")}>
                            Basic information
                        </p>
                        <p>Name, email, nationality etc.</p>
                    </div>
                </Link>
                <Link to="#tab2" className={(openTab === 2
                    ? "border rounded-sm p-5 w-full flex border-green-400"
                    : "border rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"       
                    >
                    <div className={(openTab === 2 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        2
                    </div>
                    <div className="ml-2">
                        <p className={(openTab === 2 ? "font-semibold text-green-500" : "font-semibold")}>
                            Permit information
                        </p>
                        <p>Type, Purpose, Country of export etc.</p>
                    </div>
                </Link>
                <Link to="#tab3" className={(openTab === 3
                    ? "border rounded-sm p-5 w-full flex border-green-400"
                    : "border rounded-sm p-5 w-full flex")}
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"       
                    >
                    <div className={(openTab === 3 ? "rounded-full text-green-500 font-semibold h-10 w-10 flex items-center justify-center border border-green-500" : "rounded-full font-semibold h-10 w-10 flex items-center justify-center border ")}>
                        3
                    </div>
                    <div className="ml-2">
                        <p className={(openTab === 3 ? "font-semibold text-green-500" : "font-semibold")}>
                            Additional information
                        </p>
                        <p>Description, attach files etc.</p>
                    </div>
                </Link>
            </ul>

            <div className="sm:mt-10 mt-5 p-2">
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {
                    useCredentials === false ? <div>
                        <div className="mb-5 text-center">
                    <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 shadow-inset">
                        <img className="object-cover w-full h-32 rounded-full" src={Avatar} alt="user-avatar" />
                    </div>

                </div>

                <div className="mb-5">
                    <label htmlFor="fullname" className="font-bold mb-1 text-gray-700 block">Full name</label>
                    <input type="text"
                        name="fullname"
                        id="fullname"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Enter your name"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Enter your email address"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="phone" className="font-bold mb-1 text-gray-700 block">Mobile phone number</label>
                    <input
                        type="phone"
                        id="phone"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Enter your phone number"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="country" className="font-bold mb-1 text-gray-700 block">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Your country of origin"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="address" className="font-bold mb-1 text-gray-700 block">Address</label>
                    <input
                        type="text"
                        id="physical_address"
                        name="physical_address"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Your current physical address"/>
                </div>
                    </div> : <></>
                }

                <div className="mb-5">
                    <label htmlFor="national_id" className="font-bold mb-1 text-gray-700 block">National ID Number</label>
                    <input
                        type="text"
                        id="national_id"
                        name="national_id"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 focus:border-green-500 fucus:ring-0 focus:outline-none text-gray-600 font-medium"
                        placeholder="Enter your national ID number"/>
                </div>
                <div className="flex">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    onChange={(event) => setUseCredentials(!useCredentials)}
                    checked={useCredentials ? true : false}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Use my DNPW E-Permitting account credentials
              </label>
            </div>
            </div>

            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p className="mb-2">
                    The Department of National Parks and Wildlife (DNPW) is the Malawi Government agency mandated by law to conserve, manage and regulate the sustainable use of wildlife resources in and outside protected areas. In order to execute this mandate, the department issues various forms of permits and licenses for different wildlife and wildlife products.
                </p>
                <label className="font-bold mb-1 text-gray-700 block">Select permit type</label>
                <div className="col-span-6 sm:col-span-3">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                    <option>Local permit</option>
                    <option>International permit</option>
                    </select>
                </div>
                <label className="font-bold mb-1 mt-2 text-gray-700 block">Select permit purpose</label>
                <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Export
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Re-Export
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          Import
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          Others
                        </label>
                      </div>
                    </div>
                    
            </div>

            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>
                    Tab 3
                </p>
            </div>

            </div>
                <div className="flex justify-between">
                    {
                        openTab === 1 ? <></> : <button onClick={(event) => setOpenTab(openTab-1)} className="border-gray-300 border  flex px-4 py-2 rounded-sm mt-2 justify-right">Previous
                        </button>
                    }
                    {
                        openTab === 3 ? <SubmitButton text="Submit permit request" onLoad={false}/> : <button onClick={
                            (event) => {
                                // openTab === 1 ? setStepOneComplete(true) : <></>
                                setOpenTab(openTab+1)
                            }
                        } className="border text-green-500 border-green-500  flex px-4 py-2 rounded-sm mt-2 justify-right">Next
                        </button>
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
