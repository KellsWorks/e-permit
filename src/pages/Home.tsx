import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            {/* Hero section */}
            <section className="text-gray-600 body-font">
                <div className="bg-cover w-full flex pr-5 pl-5 pt-5 pb-10 sm:pr-20 sm:pt-20 sm:pb-40 sm:pl-20 md:flex-row flex-col items-center" style={{ backgroundImage: `url(https://lp-cms-production.imgix.net/features/2016/09/GettyImages-578179271_full-e3d250fd7575.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850)` }}>
                    <div className="lg:flex-grow w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">Department of National Parks and Wildlife - Malawi
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-100">Welcome to the DNPW Electronic Permit Application Portal (ePermit).</p>
                    <div className="flex justify-center">
                        <Link to="/permit-application" className="inline-flex text-white transition duration-150 bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-sm text-md">Get started</Link>
                    </div>
                    </div>
                </div>
                </section>

                {/* Get started */}
                <div id="getStarted" className="container px-5 sm:py-24 py-5 mb-5 mx-auto flex flex-wrap border-gray-100 mt-2">
                    <section className="text-gray-600 body-font">
                        <div className="container sm:px-24 px-5 sm:py-5 mx-auto">
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                <div className="p-4 md:w-1/3 flex">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 shadow hover:bg-green-700 text-white mb-4 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    </div>
                                    <div className="flex-grow pl-6">
                                    <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">Register</h2>
                                    <p className="leading-relaxed text-base">Obtaining a wildlife permit is now easier with this online portal. Create an account and get started.</p>
                                    <Link to="/sign-up" className="mt-3 text-blue-500 hover:text-blue-700 transition duration-150 font-semibold inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 shadow hover:bg-green-700 text-white mb-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                </div>
                                <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">Permit &amp; Licence Guide</h2>
                                <p className="leading-relaxed text-base">Learn more about the available permits, licenses and their associated fees and application requirements.</p>
                                <Link to="/licenses-and-permits" className="mt-3 text-blue-500 hover:text-blue-700 transition duration-150 font-semibold inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 shadow hover:bg-green-700 text-white mb-4 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">International Regulation</h2>
                                <p className="leading-relaxed text-base">Need to export or import from outside? Learn about the CITE procedures for international regulation.</p>
                                <Link to="/international-regulations" className="mt-3 text-blue-500 hover:text-blue-700 transition duration-150 font-semibold inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    </div>
        </div>
    )
}

export default Home