import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            {/* Hero section */}
            <section className="text-gray-600 body-font">
                <div className="bg-cover w-full flex pr-5 pl-5 pt-5 pb-5 sm:pr-20 sm:pt-20 sm:pb-40 sm:pl-20 md:flex-row flex-col items-center" style={{ backgroundImage: `url(https://lp-cms-production.imgix.net/features/2016/09/GettyImages-578179271_full-e3d250fd7575.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850)` }}>
                    <div className="lg:flex-grow w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">Department of National Parks and Wildlife - Malawi
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-100">Welcome to the DNPW Electronic Permit Application Portal (ePermit).</p>
                    <div className="flex sm:flex-row flex-col sm:justify-center sm:space-x-3 mt-2">
                        <div>
                            <Link to="#" className="text-center text-white transition duration-150 bg-green-500 py-4 px-10 hover:bg-green-600  text-lg font-bold focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Get started</Link>
                        </div>
                        <div>
                            <Link to="#" className="bg-transparent border-2 border-white-500 text-white py-4 px-12 hover:bg-green-500 transition duration-150 text-lg font-bold">Start application</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* Get started */}
                <div id="getStarted" className="sm:px-14 px-5 sm:py-10 py-5 mb-5 flex flex-wrap mt-2">
                    <div className='sm:ml-10'>
                        <h3 className='font-bold text-4xl'>
                            How to get started?
                        </h3>
                    </div>
                    <section className="text-gray-600 body-font mt-2">
                        <div className="container sm:px-10 sm:py-5">
                            
                            <div className="sm:flex w-full sm:space-x-3 md:space-y-0 lg:space-y-0">

                                <div className="p-3 sm:w-1/3 w-full flex shadow-sm border rounded-sm">
                                    
                                    <div className="flex-grow pl-6">
                                        <div className="flex space-x-4 items-center">
                                            <div className="inline-flex items-center justify-center text-green-500 mb-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2">Create an account</h2>
                                            
                                                </div>
                                    <p className="leading-relaxed text-base">Obtaining a wildlife permit is now easier with this online portal. Create an account and get started.</p>
                                    <Link to="/sign-up" className="mt-3 text-sm text-blue-500 hover:text-blue-700 transition duration-150  inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-3 md:w-1/3 flex shadow-sm border rounded-sm">
                                <div className="flex-grow pl-6">
                                        <div className="flex space-x-4 items-center">
                                            <div className="inline-flex items-center justify-center text-green-500 mb-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2">Permit &amp; Licence Guide</h2>
                                            
                                                </div>
                                    <p className="leading-relaxed text-base">Learn more about the available permits, licenses and their associated fees and application requirements.</p>
                                    <Link to="/sign-up" className="mt-3 text-sm text-blue-500 hover:text-blue-700 transition duration-150 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-3 md:w-1/3 flex shadow-sm border rounded-sm">
                                <div className="flex-grow pl-6">
                                        <div className="flex space-x-4 items-center">
                                            <div className="inline-flex items-center justify-center text-green-500 mb-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2">International Regulation</h2>
                                            
                                                </div>
                                    <p className="leading-relaxed text-base">Need to export or import from outside? Learn about the CITE procedures for international regulation.</p>
                                    <Link to="/sign-up" className="mt-3 text-sm text-blue-500 hover:text-blue-700 transition duration-150 inline-flex items-center">Learn More
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