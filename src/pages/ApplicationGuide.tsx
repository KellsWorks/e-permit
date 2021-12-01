import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../assets/lf30_editor_ddeyrqgz.json'

export default function ApplicationGuide() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
        
        <div className="bg-white overflow-hidden">
        <section className="text-gray-600 body-font pt-0">

            <div className="container sm:py-24 py-3 mx-auto  sm:px-16 px-5">
                <div className="text-center pb-3 md:pb-10 xl:pb-20">
                    <p className="text-gray-600 text-base lg:text-lg uppercase leading-tight mb-4">Using the application portal</p>
                    <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800 mb-3">HOW TO APPLY</h1>
                </div>

              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                <div className="px-4 md:w-1/3">
                  <div className="flex bg-white shadow-lg border p-6">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-white mb-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="text-gray-900 text-lg title-font mb-2">REGISTER</h2>
                      <p className="leading-relaxed text-md">Create an account <a href="{{ route('home') }}" className="font-bold txt-yellow">here</a> or login if you already have am account.
                      Check below for a step-by-step registration guide.</p>

                    </div>
                  </div>
                </div>
                <div className="px-4 md:w-1/3">
                  <div className="flex bg-white shadow-lg border p-6">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-white mb-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">FILL FORM</h2>
                      <p className="leading-relaxed text-base">Select your license/permit category and fill out the required form with your application information.</p>

                    </div>
                  </div>
                </div>
                <div className="px-4 md:w-1/3 border-5 border-green-600">
                  <div className="flex bg-white shadow-lg border p-6">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-white mb-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">PAY &amp; COLLECT</h2>
                      <p className="leading-relaxed text-base">Pay for your application and collect your licence when your permit application has been successful.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 bg-gray-200 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                     </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                      <p className="leading-relaxed">Navigate to the registration page and create a new account.</p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                      <p className="leading-relaxed">Enter your personal information including names, residence, email, date of birth and nationality.</p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                      <p className="leading-relaxed">Upload a copy of an identification document. This may be your national ID (for Malawians) or a copy of first page of your passport</p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                      <p className="leading-relaxed">Submit the information. This step will send a confirmation email to the email account that you provided.</p>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 5</h2>
                      <p className="leading-relaxed">Confirm your account by clicking on the Confirm button in the confirmation email sent in step 4.</p>
                    </div>
                  </div>
                </div>
                <Lottie options={defaultOptions}
                    height={100}
                    width={"100%"}
                    isStopped={false}
                    isPaused={false}
                    />
              </div>
            </div>
          </section>
    </div>
    )
}
