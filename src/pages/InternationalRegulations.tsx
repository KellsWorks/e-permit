import React from 'react'
import { Link } from 'react-router-dom'

export default function InternationalRegulations() {
    return (
        <div className="py-6 bg-white">

        <div>
            <div className="container mx-auto pt-5">
                <div className="text-center pb-5">
                    <p className="text-gray-600 text-base lg:text-lg uppercase leading-tight mb-4">About the CITES Treaty</p>
                    <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">International Regulation</h1>
                </div>
                <div className="w-10/12 mx-auto">
                 <p className="px-2 align-left pb-3 border-b">
                      All international trade in wildlife and wildlife products is regulated by the
                      <Link to="https://cites.org/eng/disc/what.php" target="_blank" className="text-blue-500 font-semibold hover:text-blue-600"> Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) Treaty</Link>,
                      to which Malawi is party. In order to fulfil its obligations under the CITES Treaty, Malawi issues permits to allow applicants to import, export and re-export wildlife products.
                      Note that this portal does not offer applications for CITES permits and all international import/export applications must be made directly through the DNPW.
                  </p>
                  
                  <h1 className="mt-6 px-2 xl:text-2xl md:text-2xl text:2xl font-semibold">Export</h1>
                  <p className="px-2 py-2 align-left pb-3 border-b">
                    To export a product, the applicant engages the receiving country’s Management authority to obtain an import permit. Usually, this permit comes as a scanned copy of the original. Upon production of this, the applicant brings his application,
                    to which DNPW Management Authority issues the export permit. Before issuing, DNPW ensures that the permit has all the required features.
                  </p>

                  
                  <h1 className="mt-6 px-2 xl:text-2xl md:text-2xl text:2xl font-semibold">Import</h1>
                  <p className="px-2 py-2 align-left pb-3 border-b">
                    An applicant will approach DNPW to request if they can import a particular species or product. The Scientific Authority is approached for scientific guidance.
                    Upon satisfying all requirements, the import permit, in form of a hard copy, is issued to the applicant.
                  </p>
                  

                  <h1 className="mt-6 px-2 xl:text-2xl md:text-2xl text:2xl font-semibold">Re-export</h1>
                  <p className="px-2 py-2 align-left pb-3 border-b">
                   The process follows that of exporting.
                  </p>
                </div>
            </div>
        </div>
    </div>
    )
}
