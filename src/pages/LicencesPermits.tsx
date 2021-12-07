import React from 'react'

export default function LicencesPermits() {
    return (
        <div className="sm:py-12 py-5 px-5">

        <div>
            <div className="container mx-auto">
                <div className="text-center pb-3 xl:pb-20">
                    <p className="text-gray-600 text-base lg:text-lg uppercase leading-tight mb-8">Discover the various available licenses and permits.</p>

                    <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Licences &amp; Permits</h1>

                </div>

                <div className="mx-auto">

                  <p className="px-2 py-2 align-left">
                      The Department of National Parks and Wildlife (DNPW) is the Malawi Government agency mandated by law to conserve, manage and regulate the sustainable use of wildlife resources in and outside protected areas. In order
                      to execute this mandate, the department issues various forms of permits and licenses for different wildlife and wildlife products.<br/>
                      The tables below lists the various licenses and permits, including their attached application fees.
                  </p>

                  <div className="mx-auto px-4 py-4">
                  <hr/>
                    <table className="shadow-lg table-auto border border-collapse border-gray bg-white mt-4">
                      <thead>
                        <tr>
                          <th className="border border-collapse border-green-300 bg-green-500 p-3 text-white">License</th>
                          <th className="border border-collapse border-green-300 bg-green-500 p-3 text-white">Description</th>
                          <th className="border border-collapse border-green-300 bg-green-500 p-3 text-white">Fee (MWK)</th>
                          <th className="border border-collapse border-green-300 bg-green-500 p-3 text-white">Fee (US$)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Professional hunting license</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">1,000,000.00</td>
                          <td className="border border-collapse border-gray p-3">10,000.00</td>
                        </tr>
                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Bird Licence</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">20,000.00</td>
                          <td className="border border-collapse border-gray p-3">200.00</td>
                        </tr>
                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Game Licence</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">20,000.00</td>
                          <td className="border border-collapse border-gray p-3">300.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Visitors licence</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">--</td>
                          <td className="border border-collapse border-gray p-3">100.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Hunting licence</td>
                          <td className="border border-collapse border-gray p-3">
                          These are licences issued to applicants who are licensed gun owners and would like to hunt permissible game and birds
                          </td>
                          <td className="border border-collapse border-gray p-3">Nil</td>
                          <td className="border border-collapse border-gray p-3">700.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Crocodile farming</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">200,000.00</td>
                          <td className="border border-collapse border-gray p-3">150.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Game ranching or faming licence</td>
                          <td className="border border-collapse border-gray p-3">
                          These are permits/licences issued to applicants who have met conditions to open game/wildlife ranches.
                          </td>
                          <td className="border border-collapse border-gray p-3">100,000.00</td>
                          <td className="border border-collapse border-gray p-3">100.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Animal in captivity licence</td>
                          <td className="border border-collapse border-gray p-3">These are permits/licences issued to applicants who have met conditions to keep animals in captivity.</td>
                          <td className="border border-collapse border-gray p-3">20,000.00</td>
                          <td className="border border-collapse border-gray p-3">50.00</td>
                        </tr>

                        <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Corcodile hunting licence</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3">100,000.00</td>
                          <td className="border border-collapse border-gray p-3">1,000.00</td>
                        </tr>
                         <tr className="border border-collapse border-gray p-3">
                          <td className="border border-collapse border-gray p-3">Trophy ownership licence</td>
                          <td className="border border-collapse border-gray p-3">These are licences/permits issued to applicants who would like to legally own/possess a wildlife product</td>
                          <td className="border border-collapse border-gray p-3"></td>
                          <td className="border border-collapse border-gray p-3"></td>
                        </tr>


                      </tbody>


                    </table>
                  </div>

                </div>

            </div>

        </div>

</div>
    )
}
